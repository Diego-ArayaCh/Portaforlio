import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';
import { ThemeService } from 'src/app/services/theme.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
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
    private _themeService: ThemeService,
    private _userService: UserService, private router: Router, private token: TokenStorageService, public loaderService:LoaderService) { }

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
 
  loadTheme(){
 
    console.log('Loading theme')
    this._userService.getById(this.token.getUser()._id).subscribe({
      next: async(data) => {
        this.token.saveUser(data);
        this.activeTheme = data.theme
        let root = document.documentElement;
        root.style.setProperty('--primary', this.activeTheme.primary )
      
        root.style.setProperty('--accent', this.activeTheme.accent )
        root.style.setProperty('--backgroundColor1', this.activeTheme.backgroundColor1 )
        root.style.setProperty('--backgroundColor2', this.activeTheme.backgroundColor2 )
        root.style.setProperty('--fontContentColor', this.activeTheme.fontContentColor )
        root.style.setProperty('--fontTitleColor', this.activeTheme.fontTitleColor )
        root.style.setProperty('--deepBackground', this.activeTheme.deepBackground )
        this.dataSharingService.themeActive.next(data.theme.name)
        
      },
      error(err) { console.log( err)}
    });
  
   
  }
  
  logout(): void {
    this.token.signOut();
    
    this.router.navigate(['/'])
  }
  
}
