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
        $(window).ready(function() {
          var top_of_element = $("#footer").offset().top;
          var bottom_of_element = $("#footer").offset().top + $("#footer").outerHeight();
          var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
          var top_of_screen = $(window).scrollTop();
          var element = $('.active')
    
          
          
    
          
          if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          
            
           
            $("#contact").addClass("activeContact");
          
          } else {
            $("#contact").removeClass("activeContact");
           
          }
      });
      }


         ));
       }
      
    
  }

  export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ];
  