import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'change-general',
  templateUrl: './change-general.component.html',
  styleUrls: ['./change-general.component.css']
})

export class ChangeGeneralComponent implements OnInit {
 

  constructor( private _userService: UserService, private token: TokenStorageService) { }
  generalForm = new FormGroup({
    email: new FormControl('', Validators.required),
    backupKey: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
  }
  send(){
   
    if(this.generalForm.valid){
     let id = this.token.getUser()._id
      this._userService.update(id ,this.generalForm.value).subscribe({
        next: (data) => {
          
          
            Swal.fire('General information updated', data.message, 'success');
            
         
           this.token.saveUser(data);
           
  
        
  
  
  
  
        },
        error: (e) => {
          Swal.fire('Form invalid', 'error');
        },
        complete: () => console.info('complete')
      });
    }
    
  }
}
