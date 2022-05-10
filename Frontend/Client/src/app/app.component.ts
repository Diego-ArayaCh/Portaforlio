import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SessionStorageService } from './services/SessionStorageService';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oldActive: any;
  element: any;
  public spinkit = Spinkit;
  constructor(private router: Router, private session: SessionStorageService) {
   

    this.router.events.subscribe((event: any): void => {
      if (event instanceof NavigationStart) {
       
        if (event.url == '/') {
          this.oldActive = document.getElementsByClassName('active')
          this.oldActive[0].classList.remove('active')
          this.element = document.getElementById('home')!
          this.element.classList.add('active');


        } else {
          if (event.url.includes('projects')) {
            this.oldActive = document.getElementsByClassName('active')
            this.oldActive[0].classList.remove('active')
            this.element = document.getElementById('projects')!
            this.element.classList.add('active');



          } else {
            if (event.url.includes('contact')) {
              this.oldActive = document.getElementsByClassName('active')
              this.oldActive[0].classList.remove('active')
              this.element = document.getElementById('contact')!
              this.element.classList.add('active');


            } else {

            }
          }
        }









      }
    });
  }

  title = 'Client';
}
