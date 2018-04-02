import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { TrainingService } from '../training.service';

import { Exercise } from '../exercise.model';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.sass']
})
export class NewTrainingComponent implements OnInit {
  availableExercises: Observable<any>;
  newTrainingForm: FormGroup;
  constructor(
    private trainingService: TrainingService,
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    // this.availableExercises = this.trainingService.getAvailableExercises();
    this.availableExercises = this.db.collection('availableExercises').valueChanges();
    this.newTrainingForm = new FormGroup({
      exercise: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log('trainig started =>', this.newTrainingForm.value.exercise);
    this.trainingService.startExercise(this.newTrainingForm.value.exercise);
  }
}
