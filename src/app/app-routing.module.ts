import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RegistrationComponent} from './registration/registration.component'
import{LoginComponent} from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path:'registration',component:RegistrationComponent
  },
  
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
