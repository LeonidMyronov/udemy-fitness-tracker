import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';

import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'ft-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.sass']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  userState$: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    // this.userState$ = this.authService.authChange;
    this.userState$ = this.store.select(fromRoot.getIsAuthenticated);
  }

  oncloseSidenav() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.authService.logout();
  }
}
