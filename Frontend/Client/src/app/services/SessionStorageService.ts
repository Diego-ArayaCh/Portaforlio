import { Injectable } from '@angular/core';

const PAGE = 'nav-index';
const USER_KEY = 'auth-user';
const THEME = 'theme-user';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() { }

  signOut(): void {
  
    window.sessionStorage.clear();
  }

  public saveTheme(theme: any): void {
    window.sessionStorage.removeItem(THEME);
    window.sessionStorage.setItem(THEME,  JSON.stringify(theme));
  }



  public getTheme():any {
    const theme = window.sessionStorage.getItem(THEME);
    if (theme) {
     
      return JSON.parse(theme);
    }

    return null;
  }

  public savePage(page: any): void {
    window.sessionStorage.removeItem(PAGE);
    window.sessionStorage.setItem(PAGE,  JSON.stringify(page));
  }

  public getPage():any {
    const page = window.sessionStorage.getItem(PAGE);
    if (page) {
     
      return JSON.parse(page);
    }

    return {};
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}