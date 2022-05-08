import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theme:any;
  spinnerStyle = Spinkit;
  constructor(private token:TokenStorageService){
    this.theme = this.token.getUser().theme
   
  }
  title = 'Admin';




  
}
