import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  images: any;
  contact:any;
  id:any;
  change:boolean = false;
 formContact = new FormGroup({
   name: new FormControl('', Validators.required),
   lastName: new FormControl('', Validators.required),
   email: new FormControl('', Validators.required),
   phoneNumber: new FormControl('', Validators.required),
   linkedInLink: new FormControl('', Validators.required),
   description: new FormControl('', Validators.required),

 });
  constructor(private _contactService: ContactService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    
    this._contactService.get().subscribe({
      next: async (data) => {
        console.log(data);
       this.contact = data[0];
        this.formContact.get('name')!.setValue(this.contact.name);
        this.formContact.get('lastName')!.setValue(this.contact.lastName);
        this.formContact.get('email')!.setValue(this.contact.email);
        this.formContact.get('phoneNumber')!.setValue(this.contact.phoneNumber);
        this.formContact.get('linkedInLink')!.setValue(this.contact.linkedInLink);
        this.formContact.get('description')!.setValue(this.contact.description);
      }
    });
    
  }
  save() {
    console.log(this.change)
    if (this.formContact.valid) {
      var file = new FormData();

      
      file.append('file', this.images)



      try {


        this._contactService.update(this.contact._id, this.formContact.value).subscribe({
          next: (data) => {
            console.log(data._id)


            this._contactService.saveImage(file, data._id, this.change).subscribe({
              next: (data) => {
                this.router.navigate(['/admin/contact'])
              },
              error: (e) => {
                console.log(e)
              },
              complete: () => console.info('complete image')
            });
          },
          error: (e) => {
            console.log("error")
          },
          complete: () => { Swal.fire('contact Saved','The contact has been saved','success')
        
         
        
        }
        });

      } catch (error) {

      }

    } else {
      Swal.fire('Form invalid','The form is invalid','error')

    }
    
  }
onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.images = file
      this.change = true
      if (!this.images.type.split('/').includes('image')) {
        console.log(this.images.type + 'no válido')
        Swal.fire('Not supported','The type of file is not supported','error')
        this.images = null
        this.change = false
      }
    }
  }
}
