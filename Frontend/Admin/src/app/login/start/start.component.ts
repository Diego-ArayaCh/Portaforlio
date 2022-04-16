import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

import { TokenStorageService } from '../../services/token-storage.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  userForm = new FormGroup({

    username: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required)


  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private tokenStorage: TokenStorageService, private sanitizer: DomSanitizer, private _userService: UserService, private router: Router) { }

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

      try {


        this._userService.signIn(user).subscribe({
          next: (data) => {
            if (data.success === true) {

            
              this.tokenStorage.saveToken(data.token);
              this.tokenStorage.saveUser(data);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.router.navigate(['/admin']);
              console.log(this.tokenStorage.getUser())

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
}