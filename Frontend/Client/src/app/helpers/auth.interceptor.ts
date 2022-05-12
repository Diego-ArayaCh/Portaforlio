import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { finalize, Observable } from 'rxjs';
  
  declare var $: any;


  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor() {}
    
    intercept(
      req: HttpRequest<any>,
      
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
    
      var request = req;
     


      return next.handle(request).pipe(
        finalize(() => {
          document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
        $("#contact").removeClass("activeContact");
       
      }


         ));
       }
      
    
  }

  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ];
  