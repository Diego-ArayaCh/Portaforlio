import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
   contact:any;
  id:any;
   constructor( private _contactService: ContactService) { }
 
   ngOnInit(): void {
     
   this.loadContent()
     
     
    
   }
   loadContent () {
    this._contactService.get().subscribe({
      next: async (data) => {
        this.contact = await data[0]
      
       
      
        
      
        
      },complete() {},
      error(err) { console.log('Received an error: ' + err)}
    });
    
  }
  
   

}
