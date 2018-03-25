import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit {
  isTrainingStarted = false;
  constructor() { }

  ngOnInit() {
  }

  onTrainingStarted() {
    this.isTrainingStarted = true;
  }
}
