import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public sendBtn!: BehaviorSubject<boolean>;
  constructor() {

    this.sendBtn = new BehaviorSubject<boolean>(true)
   }
}
