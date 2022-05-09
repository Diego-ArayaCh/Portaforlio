import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.css']
})
export class MainContactComponent implements OnInit {

  constructor(private _contactService:ContactService) { }
  imgContact:any;
  ngOnInit(): void {
    this.loadImg();
  }
  loadImg(){
    this._contactService.get().subscribe({
      next: async(data)=>{
         
      }
    })
  }


}
