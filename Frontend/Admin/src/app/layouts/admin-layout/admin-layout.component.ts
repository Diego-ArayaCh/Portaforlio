import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ThemeService } from 'src/app/services/theme.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { DataSharingService } from 'src/app/shared/dataSharing.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  themes: any[] = [];
  activeTheme:any;

  constructor(public dataSharingService: DataSharingService,
    private _themeService: ThemeService, private router: Router, private token: TokenStorageService, public loaderService:LoaderService) { }

  ngOnInit(): void {
   
    this.loaderService.setBoolean(false);
    this._themeService.get().subscribe({
      next: async(data) => {
        this.themes = await data
     
      
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
   this.loadTheme();
  }
  load(){
    console.log('works')
  }
  loadTheme(){
    console.log(this.token.getUser())
    let theme = this.token.getUser().theme
    this.activeTheme = theme
    let root = document.documentElement;
    root.style.setProperty('--primary', theme.primary )
  
    root.style.setProperty('--accent', theme.accent )
    root.style.setProperty('--backgroundColor1', theme.backgroundColor1 )
    root.style.setProperty('--backgroundColor2', theme.backgroundColor2 )
    root.style.setProperty('--fontContentColor', theme.fontContentColor )
    root.style.setProperty('--fontTitleColor', theme.fontTitleColor )
    root.style.setProperty('--deepBackground', theme.deepBackground )
  }
  
  logout(): void {
    this.token.signOut();
    
    this.router.navigate(['/'])
  }
  
}
