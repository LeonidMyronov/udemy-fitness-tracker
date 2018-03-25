import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ft-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.sass']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  oncloseSidenav() {
    this.closeSidenav.emit();
  }
}
