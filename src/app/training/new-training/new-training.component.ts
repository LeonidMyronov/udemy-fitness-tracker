import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ft-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.sass']
})
export class NewTrainingComponent implements OnInit {
  @Output() newTrainingStarted = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('trainig started');
    this.newTrainingStarted.emit();
  }
}
