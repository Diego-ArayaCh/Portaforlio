import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  public files:any=[];
  public preview:string='';
  contact:any;
  id:any;
 
 formContact = new FormGroup({
   name: new FormControl('', Validators.required),
   lastName: new FormControl('', Validators.required),
   email: new FormControl('', Validators.required),
   phoneNumber: new FormControl('', Validators.required),
   linkedInLink: new FormControl('', Validators.required),
   description: new FormControl('', Validators.required),
   image: new FormControl(''),

 });
  constructor(private _contactService: ContactService, private route: ActivatedRoute, private router : Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadContent();
  
    
  }

  loadContent () {
    this._contactService.get().subscribe({
      next: async (data) => {
      
       this.contact = data[0];
        this.formContact.get('name')!.setValue(this.contact.name);
        this.formContact.get('lastName')!.setValue(this.contact.lastName);
        this.formContact.get('email')!.setValue(this.contact.email);
        this.formContact.get('phoneNumber')!.setValue(this.contact.phoneNumber);
        this.formContact.get('linkedInLink')!.setValue(this.contact.linkedInLink);
        this.formContact.get('description')!.setValue(this.contact.description);
        this.formContact.get('image')!.setValue(this.contact.image);
        this.preview =  this.contact.image
      },complete() {},
      error(err) { console.log('Received an error: ' + err)}
    });
    
  }
  save() {
    this.formContact.get('image')?.setValue(this.preview);
    if (this.formContact.valid) {
     

      
    



      try {


        this._contactService.update(this.contact._id, this.formContact.value).subscribe({
          next: (data) => {
            this.router.navigate(['/admin/contact'])


            
          },
          error: (e) => {
            console.log("error")
          },
          complete: () => { Swal.fire('Contact Saved','The contact has been saved','success')
        
         
        
        }
        });

      } catch (error) {

      }

    } else {
      Swal.fire('Form invalid','The form is invalid','error')

    }
    
  }



  getImage(event:any){

    const image = event.target.files[0];
    
    this.getBase64(image).then((image: any) =>{
      this.preview = image.base;
      console.log(image.base); 
    });
    
    
    this.files.push(image);
    
    }
    
    getBase64 = async($event:any) => new Promise((resolve, reject) => {
    
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          
          base: reader.result
    
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
        
    
    
    
      }
    
    } catch (error) {
    console.log(error);
    }
    })
}
