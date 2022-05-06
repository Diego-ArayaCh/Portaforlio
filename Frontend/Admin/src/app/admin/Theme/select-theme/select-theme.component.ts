import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { DataSharingService } from 'src/app/shared/dataSharing.service';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.css']
})
export class SelectThemeComponent implements OnInit {

  constructor( private dataSharingService: DataSharingService,
    private router:Router,private _themeService:ThemeService, private token: TokenStorageService) { }
  themes: any[] = [];
  ngOnInit(): void {
    this.loadThemes();
  }
  loadThemes(): void {
  
    

    this._themeService.get().subscribe({
      next: async(data) => {
        this.themes = await data
     
      
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
  }
  changeTheme(theme:any){
    let root = document.documentElement;
    root.style.setProperty('--primary', theme.primary )
  
    root.style.setProperty('--accent', theme.accent )
    root.style.setProperty('--backgroundColor1', theme.backgroundColor1 )
    root.style.setProperty('--backgroundColor2', theme.backgroundColor2 )
    root.style.setProperty('--fontContentColor', theme.fontContentColor )
    root.style.setProperty('--fontTitleColor', theme.fontTitleColor )
    root.style.setProperty('--deepBackground', theme.deepBackground )

const user = this.token.getUser();
console.log(user)
      this._themeService.saveTheme(theme._id, user).subscribe({
      next: async(data) => {
        
        this.token.saveUser(data)
      this.router.navigate(['/admin'])
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
    this.dataSharingService.themeActive.next(theme.name);
  }
}
