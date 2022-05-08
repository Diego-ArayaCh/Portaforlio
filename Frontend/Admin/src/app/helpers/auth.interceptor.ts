import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { finalize, Observable } from 'rxjs';
  import { TokenStorageService } from '../services/token-storage.service';
  import Swal from 'sweetalert2'
import { LoaderService } from '../loader/loader.service';
import { ThemeService } from '../services/theme.service';
  const TOKEN_HEADER_KEY = 'x-access-token'; // for Spring Boot back-end
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private _themeService: ThemeService,private token: TokenStorageService, public loaderService: LoaderService) {}
    
    intercept(
      req: HttpRequest<any>,
      
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
    
      let authReq = req;
      const token = this.token.getToken();
  
     
  
      if (token != null) {  
        authReq = req.clone({
          headers: req.headers.set(TOKEN_HEADER_KEY, token),
        });
       
        
      }else{
      
      }

      


      return next.handle(authReq)
    }
  }

  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ];
  