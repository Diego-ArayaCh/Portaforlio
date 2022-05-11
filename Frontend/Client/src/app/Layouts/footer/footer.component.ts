import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import Swal from 'sweetalert2';

declare function sendEmail(email:any,content:any,destiny:any):any;
@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
year:any
contact:any;
form = new FormGroup({
  email: new FormControl('', [Validators.required,
  Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
  content: new FormControl('', [Validators.required,
    Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)])
  



});
  constructor(private _contactService:ContactService, public dataSharingService: DataSharingService) {

    this._contactService.getInfo().subscribe({
      next: (data) =>{
        this.contact = data[0]
      
        
      }
    })

   }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.year = currentYear
  }

  async send(){
   
    if(this.form.valid){
      const input = document.getElementById('sendBtn') as HTMLInputElement | null;


           input?.setAttribute('disabled', '');
      let email = this.form.get('email')!.value
      let content = this.form.get('content')!.value

this.form.get('email')?.setValue('');

this.form.get('content')?.setValue('');

    const message = await sendEmail(email,content ,this.contact!.email)
    if (message == 'OK') {
      Swal.fire('Message sent','The message was sent successfully', 'success')
    
    } else {
      Swal.fire('Error','The server not respond', 'error')
   
    }
    
  }else{
    
    if(!this.form.get('content')?.valid){
      Swal.fire('Field message','Please fill the field message', 'warning')
    
    }
    if(!this.form.get('email')?.valid){
      Swal.fire('Field email','Please fill the field email', 'warning')
    
    }
    
  }
}
}
