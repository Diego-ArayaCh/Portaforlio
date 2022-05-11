import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainHomeComponent} from './Components/Home/main-home/main-home.component'
import {OverviewProjectsComponent} from './Components/Projects/overview-projects/overview-projects.component'
import {ProjectDetailsComponent} from './Components/Projects/project-details/project-details.component'
import {MainContactComponent} from './Components/Contact/main-contact/main-contact.component'

const routes: Routes = [{
  path:'', component: MainHomeComponent,
  children:[{
    path:'Home',component: MainHomeComponent
  }
  ]

},
{path:'projects',component: OverviewProjectsComponent},
{path:'projects/details/:id',component: ProjectDetailsComponent},

{path:'contact',component: MainContactComponent},
{ path: '', redirectTo: '/', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
