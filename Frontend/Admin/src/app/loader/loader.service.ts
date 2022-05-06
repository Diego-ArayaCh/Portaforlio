import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoading!: BehaviorSubject<boolean> ;
  public label!: BehaviorSubject<string>;
  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
    this.label = new BehaviorSubject<string>('');
   }

 public   setLabel(value: string) {
     this.label= new BehaviorSubject<string>(this.label + value);
   }
   public   setBoolean(value: boolean) {
     console.log(value);
    this.isLoading= new BehaviorSubject<boolean>(value);
  }
}