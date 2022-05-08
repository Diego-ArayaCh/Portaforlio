import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/shared/dataSharing.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(  private _userService: UserService, public dataSharingService: DataSharingService) { }
  forgotForm = new FormGroup({
    email: new FormControl('', Validators.required),
    backupKey: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }
  back(){
    this.dataSharingService.showForgot.next(false)
    this.dataSharingService.showNormal.next(true)
  }
  send(){
    
    if(this.forgotForm.valid){
      this._userService.recovery(this.forgotForm.value).subscribe({
        next: (data) => {
          if (data.success === true) {
          
            Swal.fire('Password changed', data.message, 'success');
            this.back();
          } else {
           
            Swal.fire('Form invalid', data.message, 'error');
  
          }
  
  
  
  
        },
        error: (e) => {
       
        },
        complete: () => console.info('complete')
      });
    }
    
  }
}
