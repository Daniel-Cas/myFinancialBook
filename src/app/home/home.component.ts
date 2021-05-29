import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Enterprise } from './interfaces/home.interfaces';
import { Welcome } from '../login/interface/login.interface';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../login/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {


  enterprise!: Welcome;

  constructor( public loginService: LoginService ) {
    this.loginService.findEnterprise()
    .subscribe( resp => {
      this.enterprise = resp;
      console.log(resp)
    });
  }

  }


