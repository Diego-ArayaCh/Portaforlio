import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
   i = 0;
  constructor(private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
   
  }
  
  logout(): void {
    this.token.signOut();
    this.router.navigate(['/'])
  }
  changeTheme():void{
    let root = document.documentElement;
  console.log(" setProperty works")
 
    if(this.i == 0){
      root.style.setProperty('--orange-color', ' #FC8019' )
  
  root.style.setProperty('--space-color', ' #000000d0' )
  root.style.setProperty('--gray-color', ' #93959F' )
  root.style.setProperty('--white-color', ' #ffffff' )
      this.i = 1
    }
    else{
     


      root.style.setProperty('--orange-color', ' #FC8019' )
  
  root.style.setProperty('--space-color', ' #ffffff' )
  root.style.setProperty('--gray-color', ' #93959F' )
  root.style.setProperty('--white-color', ' #000000d0' )
      this.i = 0
    }
  }
}
