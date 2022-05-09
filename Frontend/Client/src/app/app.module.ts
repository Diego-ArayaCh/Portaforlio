import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { MainContactComponent } from './Components/Contact/main-contact/main-contact.component';



//new dependencies
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MainHomeComponent } from './Components/Home/main-home/main-home.component';
import { ProjectDetailsComponent } from './Components/Projects/project-details/project-details.component';
import { OverviewProjectsComponent } from './Components/Projects/overview-projects/overview-projects.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
