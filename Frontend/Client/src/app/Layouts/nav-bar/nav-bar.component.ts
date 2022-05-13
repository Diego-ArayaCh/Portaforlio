import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { SessionStorageService } from 'src/app/services/SessionStorageService';

@Component({
  selector: 'layout-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isChecked= false;
  constructor(private dataSharingService:DataSharingService, private route: ActivatedRoute,private router:Router,private session:SessionStorageService) { }

  ngOnInit(): void {
    
    this.implementTheme()
    
  }


  implementTheme(){


    var theme=   this.session.getTheme()
      if(theme == null){
        this.isChecked = false;
        theme = {
          "primary":"#00b6c0",
          "fontColor":"#ffffff",
          "deep":"#272829",
          "mode": "dark"
        }
        this.session.saveTheme(theme);
        
       
      }else{
        if(theme.mode=='light'){
          
          this.isChecked = true
        }else{
          this.isChecked = false
         
        }
       
       
      }
      let root = document.documentElement;
       
      root.style.setProperty('--primary', theme.primary)
      root.style.setProperty('--fontColor', theme.fontColor)
      root.style.setProperty('--deep', theme.deep)
      //color of loader
      this.dataSharingService.background.next(theme.deep);
      this.dataSharingService.color.next(theme.primary);
    }

 loadIndex(){
  
  
  
 }
toContact(){
  



  document.getElementById('footer')?.scrollIntoView({behavior: 'smooth'})
  document.getElementById('navbarNav')?.classList.remove('show')
}
toProjects(){
  if(this.router.url =='/projects'){
   
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
  }else{
   
    this.router.navigate(['/projects'])
  
  }
  document.getElementById('navbarNav')?.classList.remove('show')
}
toHome(){
  if(this.router.url =='/'){
    
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
    
  }else{
    
    this.router.navigate(['/'])
   
    
  }
  document.getElementById('navbarNav')?.classList.remove('show')
  
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



changeTheme(){
  let theme;
  if(this.isChecked){
     theme = {
      "primary":"#872929",
      "fontColor":"#272829",
      "deep":"#fff",
      "mode": "light"
    }
    this.session.saveTheme(theme);
  }
  else{
    theme = {
      "primary":"#00b6c0",
      "fontColor":"#ffffff",
      "deep":"#272829",
      "mode": "dark"
    }
    this.session.saveTheme(theme);
    
  }
  let root = document.documentElement;
       
          root.style.setProperty('--primary', theme.primary)
          root.style.setProperty('--fontColor', theme.fontColor)
          root.style.setProperty('--deep', theme.deep)
          //color of loader
          this.dataSharingService.background.next(theme.deep);
          this.dataSharingService.color.next(theme.primary);
}
}
