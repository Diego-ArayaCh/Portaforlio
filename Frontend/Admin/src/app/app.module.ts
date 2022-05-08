import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
//new dependencies
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {NgHttpLoaderModule} from 'ng-http-loader'
import { ChangeGeneralComponent } from "./admin/Components/change-general/change-general.component";
import { ChangePasswordComponent } from "./admin/Components/change-password/change-password.component";
import { ViewGeneralComponent } from "./admin/Components/view-general/view-general.component";




@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginLayoutComponent,
    ViewGeneralComponent,
    ChangePasswordComponent,
    ChangeGeneralComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    MatProgressSpinnerModule,
    NgHttpLoaderModule.forRoot()
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
