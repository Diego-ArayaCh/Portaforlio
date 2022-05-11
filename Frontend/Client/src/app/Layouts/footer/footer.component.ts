import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
year:any
contact:any;
formProject = new FormGroup({
  email: new FormControl('', Validators.required),
  message: new FormControl('', Validators.required)
  



});
  constructor(private _contactService:ContactService) {

    this._contactService.getInfo().subscribe({
      next: (data) =>{
        this.contact = data[0]
        console.log(this.contact);
        
      }
    })

   }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.year = currentYear
  }

  sendEmail(){

  }
}
