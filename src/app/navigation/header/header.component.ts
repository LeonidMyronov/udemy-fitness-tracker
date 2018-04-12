import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../auth/auth.service';

import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'ft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    // this.userState$ = this.authService.authChange;
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
  }

  onLogout() {
    this.authService.logout();
  }
}
