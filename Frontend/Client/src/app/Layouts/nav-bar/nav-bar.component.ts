import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from 'src/app/services/SessionStorageService';

@Component({
  selector: 'layout-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router,private session:SessionStorageService) { }

  ngOnInit(): void {
   
    
  }
 loadIndex(){
  
  
  
 }
toContact(){
  document.getElementById('footer')?.scrollIntoView({behavior: 'smooth'})
}
//  saveIndex(index:any){
//   let elementActive = index as HTMLElement
//   let element =  document.getElementsByClassName('active')
//    element[0].classList.remove('active')
//    elementActive.classList.add('active')
//   setTimeout(() =>{
   

//   let page = {index: elementActive.id, url:this.router.url}
 
//   this.session.savePage(page)
  
//   }, 1000)
  

//  }
}
