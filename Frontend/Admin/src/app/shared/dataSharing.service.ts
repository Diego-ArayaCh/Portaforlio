import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class DataSharingService {
    public themeActive!: BehaviorSubject<string>;
    public showForgot!: BehaviorSubject<boolean>;
    public showNormal!: BehaviorSubject<boolean>;
    constructor(private token: TokenStorageService){
      
            this.themeActive = new BehaviorSubject<string>('');	
            this.showForgot = new BehaviorSubject<boolean>(false);	
         
            this.showNormal = new BehaviorSubject<boolean>(true);	
     
    }
    
    
}