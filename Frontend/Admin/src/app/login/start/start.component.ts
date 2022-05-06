import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

import { TokenStorageService } from '../../services/token-storage.service';
import { ThemeService } from 'src/app/services/theme.service';
import { DataSharingService } from 'src/app/shared/dataSharing.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  theme:any;
  userForm = new FormGroup({

    username: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),



  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private tokenStorage: TokenStorageService,
     private sanitizer: DomSanitizer,
      private _userService: UserService,
       private router: Router, 
       private _themeService: ThemeService, private token: TokenStorageService, public dataSharingService:DataSharingService) { }
      activeTheme:any;
  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;

      if (this.isLoggedIn) {
        this.router.navigate(['/admin'])
        
      }

    }
  }



  
  send(): void {

    if (this.userForm.valid) {

      const user = this.userForm.value;
      console.log(user);
      

      try {


        this._userService.signIn(user).subscribe({
          next: (data) => {
            if (data.success === true) {
            
           
              this.tokenStorage.saveToken(data.token);
              this.tokenStorage.saveUser(data.user);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.router.navigate(['/admin']);
              
            
            } else {
              console.log("error")
              this.errorMessage = data.msg;
              this.isLoginFailed = true;


            }




          },
          error: (e) => {
            this.errorMessage = e.msg;
            this.isLoginFailed = true
          },
          complete: () => console.info('complete')
        });





      } catch (error) {

      }

    } else {
      //alerts

    }

  }
  loadTheme(){
 
    
    this._userService.getById(this.token.getUser()._id).subscribe({
      next: async(data) => {
        this.token.saveUser(data);
        this.activeTheme = data.theme
        let root = document.documentElement;
        root.style.setProperty('--primary', this.activeTheme.primary )
      
        root.style.setProperty('--accent', this.activeTheme.accent )
        root.style.setProperty('--backgroundColor1', this.activeTheme.backgroundColor1 )
        root.style.setProperty('--backgroundColor2', this.activeTheme.backgroundColor2 )
        root.style.setProperty('--fontContentColor', this.activeTheme.fontContentColor )
        root.style.setProperty('--fontTitleColor', this.activeTheme.fontTitleColor )
        root.style.setProperty('--deepBackground', this.activeTheme.deepBackground )
        this.dataSharingService.themeActive.next(data.theme.name)
        
      },
      error(err) { console.log( err)}
    });
  
   
  }
}