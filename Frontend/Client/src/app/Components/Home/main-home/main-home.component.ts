import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  constructor(private _contactService:ContactService) { }
  imgContact:any;
  description:any;

  ngOnInit(): void {
    this.loadImg();

  }
  loadImg(){
    this._contactService.getHeavy().subscribe({
      next: async(data)=>{
          this.imgContact = await data[0].image
          this.description = await data[0].description
        
      }
    })
  }

}
