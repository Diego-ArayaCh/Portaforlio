import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-select-theme',
  templateUrl: './select-theme.component.html',
  styleUrls: ['./select-theme.component.css']
})
export class SelectThemeComponent implements OnInit {

  constructor(private _themeService:ThemeService, private token: TokenStorageService) { }
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
    root.style.setProperty('--fontColor', theme.fontColor )

const user = this.token.getUser();
console.log(user)
      this._themeService.saveTheme(theme._id, user).subscribe({
      next: async(data) => {
        
        this.token.saveUser(data)
      
      
        
      },
      error(err) { console.log('Received an error: ' + err)}
    });
  }
}
