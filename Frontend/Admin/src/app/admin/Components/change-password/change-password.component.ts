import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { DataSharingService } from 'src/app/shared/dataSharing.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(  private _userService: UserService, public dataSharingService: DataSharingService, private token: TokenStorageService) { }
  forgotForm = new FormGroup({
    email: new FormControl('', Validators.required),
    backupKey: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }
  
  send(){
   
    if(this.forgotForm.valid){
      this._userService.recovery(this.forgotForm.value).subscribe({
        next: (data) => {
          if (data.success === true) {
          
            Swal.fire('Password changed', data.message, 'success');
            this.token.saveUser(data.user);
            
          } else {
           
            Swal.fire('Form invalid', data.message, 'error');
  
          }
  
  
  
  
        },
        error: (e) => {
         console.log(e);
        },
        complete: () => console.info('complete')
      });
    }
    
  }
}
