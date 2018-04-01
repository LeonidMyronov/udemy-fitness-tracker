import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { TrainingService } from '../training.service';

import { StopTrainingComponent } from './stop-training.component';
import { Exercise } from '../exercise.model';


@Component({
  selector: 'ft-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.sass']
})
export class CurrentTrainingComponent implements OnInit {
  currentTraining: Exercise;
  progress = 0;
  timer;
  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.startOrResumeTraining();
  }

  startOrResumeTraining() {

    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, this.trainingService.getRunningExercise().duration * 10);
  }

  onStopTraining() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {data:
      {progress: this.progress}
    });

    dialogRef.afterClosed().subscribe( response => {
      if (response) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTraining();
      }
    });
  }


}
