import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentLoginComponent } from './component-login/component-login.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentRegisterComponent } from './component-register/component-register.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { MatDialogModule } from '@angular/material/dialog';
import { MypostsComponent } from './myposts/myposts.component';



@NgModule({
  declarations: [
    AppComponent,
    ComponentLoginComponent,
    ComponentHomeComponent,
    ComponentRegisterComponent,
    ProfileComponent,
    LogoutComponent,
    CreatepostComponent,
    ViewpostComponent,
    MypostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
