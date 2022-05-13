import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SessionStorageService } from './SessionStorageService';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public sendBtn!: BehaviorSubject<boolean>;
  
  public background: BehaviorSubject<string>;
  public color: BehaviorSubject<string>;
  constructor(private session: SessionStorageService) {
    let theme = session.getTheme()
    if(theme!= null){
      this.color = new BehaviorSubject<string>(theme.primary);
      this.background = new BehaviorSubject<string>(theme.deep);
    }else{
      this.color = new BehaviorSubject<string>('#00b6c0');
      this.background = new BehaviorSubject<string>('#272829');
    }
    this.sendBtn = new BehaviorSubject<boolean>(true);
  
   }
}
