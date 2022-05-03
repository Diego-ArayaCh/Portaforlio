import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { StartComponent } from './start/start.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './Projects/projects-overview/projects-overview.component';
import { ProjectsUpdateComponent } from './Projects/projects-update/projects-update.component';
import { ProjectsDetailsComponent } from './Projects/projects-details/projects-details.component';
import { ProjectsCreateComponent } from './Projects/projects-create/projects-create.component';
import { ContactUpdateComponent } from './Contact/contact-update/contact-update.component';
import { ContactDetailsComponent } from './Contact/contact-details/contact-details.component';

@NgModule({
  declarations: [
    StartComponent,
    ProjectsComponent,
    ProjectsUpdateComponent,
    ProjectsDetailsComponent,
    ProjectsCreateComponent,
    ContactUpdateComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
 
})
export class AdminModule { }
