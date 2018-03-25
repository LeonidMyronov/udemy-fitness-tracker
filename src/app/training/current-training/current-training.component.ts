import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.sass']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {

      this.timer = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) {
          clearInterval(this.timer);
        }
      }, 100);

    }, 500);
  }

}
