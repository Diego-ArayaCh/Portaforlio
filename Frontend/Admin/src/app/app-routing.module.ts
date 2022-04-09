import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import{AdminGuard} from './shared/guards/admin.guard'

const routes: Routes = [
  {path: '', component: LoginLayoutComponent ,
    children:[
        {path:'',redirectTo:'/login',pathMatch:'full'},
        {path:'',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
        ]
      },

    //Rutas para administrador
  {path: '' ,component: AdminLayoutComponent ,
    children:[
          {path:'',redirectTo:'/admin-home',pathMatch:'full'},
          {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)}
        ]
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
