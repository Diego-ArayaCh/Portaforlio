import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { UserService } from 'src/app/services/user.service';

import { TokenStorageService } from '../../services/token-storage.service';

import { DataSharingService } from 'src/app/shared/dataSharing.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  
 
  userForm = new FormGroup({

    username: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),



  });
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private tokenStorage: TokenStorageService,
     
      private _userService: UserService,
       private router: Router, 
         public dataSharingService:DataSharingService) { }
     
  ngOnInit(): void {
   

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;

      if (this.isLoggedIn) {
        this.router.navigate(['/admin'])
        
      }

    }
  }



  showForgot(){
    this.dataSharingService.showForgot.next(true)
    this.dataSharingService.showNormal.next(false)
  }
  send(): void {

    if (this.userForm.valid) {

      const user = this.userForm.value;
      
      

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
              
              this.errorMessage = data.msg;
              this.isLoginFailed = true;


            }




          },
          error: (e) => {
            this.errorMessage = e.msg;
            this.isLoginFailed = true
            Swal.fire('login failed', 'The server not answer','error')
          },
          complete: () => console.info('complete')
        });





      } catch (error) {

      }

    } else {
      //alerts
      Swal.fire('login failed', 'The form is invalid','error')
    }

  }

}