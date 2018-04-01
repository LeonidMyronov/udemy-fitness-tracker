import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Exercise } from './exercise.model';

@Injectable()
export class TrainingService {

  newTrainingStarted: Subject<Exercise> = new Subject();
  private runningExercise: Exercise;
  private exercises: Exercise[] = [];
  private availabeExercises: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 14},
    {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 12},
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 10},
  ];

  constructor() { }

  getAvailableExercises() {
    return [...this.availabeExercises];
  }

  startExercise(id: string) {
    this.runningExercise = this.availabeExercises.find(e => e.id === id);
    this.newTrainingStarted.next({...this.runningExercise});
  }

  completeExercise() {
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.newTrainingStarted.next(null);
    console.log('past-exercises =>', this.exercises);
  }

  cancelExercise(progress: number) {
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      state: 'completed'
    });
    this.runningExercise = null;
    this.newTrainingStarted.next(null);
    console.log('past-exercises =>', this.exercises);
  }

  getRunningExercise() {
    return {...this.runningExercise};
  }

}
