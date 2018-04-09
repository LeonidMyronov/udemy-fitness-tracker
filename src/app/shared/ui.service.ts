import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UIService {
  public requestChanged: Subject<boolean> = new Subject();
  constructor() {}
}
