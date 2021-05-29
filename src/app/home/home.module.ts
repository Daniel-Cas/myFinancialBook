import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/services/login.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    LoginService
  ]
})
export class HomeModule { }
