import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TrainingService } from '../training.service';

import { Exercise } from '../exercise.model';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.sass']
})
export class NewTrainingComponent implements OnInit {
  availableExercises: Exercise[];
  newTrainingForm: FormGroup;
  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.availableExercises = this.trainingService.getAvailableExercises();
    this.newTrainingForm = new FormGroup({
      exercise: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('trainig started =>', this.newTrainingForm.value.exercise);
    this.trainingService.startExercise(this.newTrainingForm.value.exercise);
  }
}
