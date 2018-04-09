import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {
  public requestChanged: Subject<boolean> = new Subject();

  constructor(
    public snackBar: MatSnackBar
  ) {}

  showSnackBarMessage(message, action, duration) {
    debugger;
    this.snackBar.open(message, action, {duration: duration});
  }

}
