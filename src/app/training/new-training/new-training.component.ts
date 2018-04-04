import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from '../training.service';

import { Exercise } from '../exercise.model';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.sass']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  availableExercises: Exercise[];
  availableExercisesSubsciption: Subscription;
  newTrainingForm: FormGroup;
  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.availableExercisesSubsciption = this.trainingService.availableExercisesChanged
      .subscribe( (response: Exercise[]) => this.availableExercises = response);
    this.trainingService.fetchAvailableExercises();

    this.newTrainingForm = new FormGroup({
      exercise: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('trainig started =>', this.newTrainingForm.value.exercise);
    this.trainingService.startExercise(this.newTrainingForm.value.exercise);
  }

  ngOnDestroy() {
    this.availableExercisesSubsciption.unsubscribe();
  }
}
