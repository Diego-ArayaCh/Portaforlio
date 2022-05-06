import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ProjectsComponent } from './Projects/projects-overview/projects-overview.component';
import { ProjectsUpdateComponent } from './Projects/projects-update/projects-update.component';
import { ProjectsDetailsComponent } from './Projects/projects-details/projects-details.component';
import { ProjectsCreateComponent } from './Projects/projects-create/projects-create.component';
import { ContactUpdateComponent } from './Contact/contact-update/contact-update.component';
import { ContactDetailsComponent } from './Contact/contact-details/contact-details.component';
import { SelectThemeComponent } from './Theme/select-theme/select-theme.component';
const routes: Routes = [{
  path:'', component: StartComponent,
  children:[{
    path:'/admin-home',component: StartComponent
  }
  ]

},
{path:'projects',component: ProjectsComponent},
{path:'projects/create',component: ProjectsCreateComponent},
{path:'projects/update/:id',component: ProjectsUpdateComponent},
{path:'projects/details/:id',component: ProjectsDetailsComponent},

{path:'contact',component: ContactDetailsComponent},
{path:'contact/update',component: ContactUpdateComponent},

{path:'themes/choose',component: SelectThemeComponent},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
