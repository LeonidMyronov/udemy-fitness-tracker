import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from './training.service';

@Component({
  selector: 'ft-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit, OnDestroy {
  isTrainingStarted = false;
  newTrainingSubscription: Subscription;
  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.newTrainingSubscription = this.trainingService.newTrainingStarted.subscribe(
      exercise => {
        // console.log(`training ${exercise.name} started`);
        this.isTrainingStarted = exercise ? true : false;
      }
    );
  }

  onTrainingStarted() {
    this.isTrainingStarted = true;
  }

  ngOnDestroy() {
    this.newTrainingSubscription.unsubscribe();
  }
}
