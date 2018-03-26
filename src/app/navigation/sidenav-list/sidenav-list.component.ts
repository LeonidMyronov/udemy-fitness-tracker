import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ft-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.sass']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  userState$;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userState$ = this.authService.authChange;
  }

  oncloseSidenav() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
