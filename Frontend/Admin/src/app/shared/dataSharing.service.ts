import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class DataSharingService {
    public themeActive!: BehaviorSubject<string>;
    constructor(private token: TokenStorageService){
      
            this.themeActive = new BehaviorSubject<string>('');	
       
     
    }
    
    
}