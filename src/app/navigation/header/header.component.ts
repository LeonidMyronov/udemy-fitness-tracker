import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'ft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter<void>();
  userState$;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userState$ = this.authService.authChange;
  }

  onLogout() {
    this.authService.logout();
  }
}
