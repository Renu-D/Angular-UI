import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentLoginComponent } from './component-login/component-login.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentRegisterComponent } from './component-register/component-register.component';
import {ProfileComponent } from './profile/profile.component';
//import { LogoutComponent } from './logout/logout.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import {  MypostsComponent } from './myposts/myposts.component';



const routes: Routes = [
  { path: '',component: ComponentLoginComponent },
  { path: 'register',component:ComponentRegisterComponent},
  {path:'createpost',component:CreatepostComponent},
  {path: 'viewpost',component:ViewpostComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'home',component:ComponentHomeComponent},
  //{path: 'logout', component: LogoutComponent},
  {path: 'myposts',component:MypostsComponent},

{ path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
