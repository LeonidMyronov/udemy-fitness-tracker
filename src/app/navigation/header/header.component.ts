import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
