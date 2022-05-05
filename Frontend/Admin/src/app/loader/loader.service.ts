import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading!: BehaviorSubject<boolean> ;
  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(true);
   }
}