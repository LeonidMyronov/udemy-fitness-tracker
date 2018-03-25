import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopTrainingComponent } from './stop-training.component';


@Component({
  selector: 'ft-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.sass']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() stopTraining = new EventEmitter<void>();
  progress = 0;
  timer;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.startOrResumeTraining();
    }, 500);
  }

  startOrResumeTraining() {
    this.timer = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 100);
  }

  onStopTraining() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {data:
      {progress: this.progress}
    });

    dialogRef.afterClosed().subscribe( response => {
      if (response) {
        this.stopTraining.emit();
      } else {
        this.startOrResumeTraining();
      }
    });
  }

}
