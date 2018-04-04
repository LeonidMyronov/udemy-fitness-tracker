import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {

  newTrainingStarted: Subject<Exercise> = new Subject();
  availableExercisesChanged: Subject<Exercise[]> = new Subject();
  finishedExercisesChanged: Subject<Exercise[]> = new Subject();
  private runningExercise: Exercise;
  private fbSubs: Subscription[] = [];
  private availabeExercises: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 14 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 12 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 10 },
  ];

  constructor(
    private db: AngularFirestore
  ) { }

  fetchAvailableExercises() {
    this.fbSubs.push(
      this.db.collection('availableExercises').snapshotChanges().map(
        response => {
          return response.map(r => {
            const id = r.payload.doc.id;
            const data = r.payload.doc.data() as Exercise;
            return {
              id: id,
              ...data
            };
          });
        }
      )
      .subscribe( (response: Exercise[]) => {
        this.availabeExercises = response;
        this.availableExercisesChanged.next([...this.availabeExercises]);
      })
    );
  }

  startExercise(id: string) {
    this.runningExercise = this.availabeExercises.find(e => e.id === id);
    console.log('runningExercise => ', this.runningExercise);
    this.newTrainingStarted.next({ ...this.runningExercise });
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.newTrainingStarted.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      state: 'canceled'
    });
    this.runningExercise = null;
    this.newTrainingStarted.next(null);
  }

  private addDataToDatabase(data: Exercise) {
    this.db.collection('finishedExercises').add(data);

  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

  fetchPastExercises() {
    this.fbSubs.push(
    this.db.collection('finishedExercises')
      .valueChanges()
      .subscribe(
        (exercises: Exercise[]) => this.finishedExercisesChanged.next(exercises)
      )
    );
  }

  cancelSubscription() {
    this.fbSubs.forEach(s => s.unsubscribe());
  }
}
