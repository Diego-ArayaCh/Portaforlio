import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/dataSharing.service';

@Component({
  selector: 'change-general',
  templateUrl: './change-general.component.html',
  styleUrls: ['./change-general.component.css']
})

export class ChangeGeneralComponent implements OnInit {
 

  constructor( private router:Router, public dataSharingService: DataSharingService, private _userService: UserService, private token: TokenStorageService) { }
  generalForm = new FormGroup({
    email: new FormControl('', Validators.required),
    backupKey: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });
  ngOnInit(): void {


    this.loadUser()
  }

  loadUser(){
    this._userService.getById(this.token.getUser()._id).subscribe({
      next: async (data)=> {
        this.generalForm.get('email')?.setValue(data.email);
        this.generalForm.get('username')?.setValue(data.username);
        this.generalForm.get('backupKey')?.setValue(data.backupKey);
  
      }
  
  
    })
  }
  send(){
   
    if(this.generalForm.valid){
     let id = this.token.getUser()._id
      this._userService.update(id ,this.generalForm.value).subscribe({
        next: (data) => {
          
          
            Swal.fire('General information updated', data.message, 'success');
            
         
           this.token.saveUser(data);
           
  
           this.reloadCurrentRoute();
  
  
  
  
        },
        error: (e) => {
          Swal.fire('Form invalid', 'error');
        },
        complete: () => console.info('complete')
      });
    }
    
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}
