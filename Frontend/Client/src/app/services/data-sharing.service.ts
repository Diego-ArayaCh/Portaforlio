import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public sendBtn!: BehaviorSubject<boolean>;
  public themeBtn: BehaviorSubject<boolean>;
  constructor() {

    this.sendBtn = new BehaviorSubject<boolean>(true);
    this.themeBtn = new BehaviorSubject<boolean>(true);
   }
}
