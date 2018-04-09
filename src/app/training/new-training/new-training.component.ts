import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from '../training.service';

import { Exercise } from '../exercise.model';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.sass']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  availableExercises: Exercise[];
  availableExercisesSubsciption: Subscription;
  newTrainingForm: FormGroup;
  isLoading$: Observable<boolean>;
  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.availableExercisesSubsciption = this.trainingService.availableExercisesChanged
      .subscribe( (response: Exercise[]) => this.availableExercises = response);

    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.fetchAvailableExercises();
    this.newTrainingForm = new FormGroup({
      exercise: new FormControl(null, [Validators.required])
    });
  }

  fetchAvailableExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onSubmit() {
    console.log('trainig started =>', this.newTrainingForm.value.exercise);
    this.trainingService.startExercise(this.newTrainingForm.value.exercise);
  }

  ngOnDestroy() {
    this.availableExercisesSubsciption.unsubscribe();
  }
}
