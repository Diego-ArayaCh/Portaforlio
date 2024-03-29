import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { MainContactComponent } from './Components/Contact/main-contact/main-contact.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


//new dependencies
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgHttpLoaderModule } from 'ng-http-loader';

import { MainHomeComponent } from './Components/Home/main-home/main-home.component';
import { ProjectDetailsComponent } from './Components/Projects/project-details/project-details.component';
import { OverviewProjectsComponent } from './Components/Projects/overview-projects/overview-projects.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainContactComponent,
    MainHomeComponent,
    ProjectDetailsComponent,
    OverviewProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
    MatSlideToggleModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
