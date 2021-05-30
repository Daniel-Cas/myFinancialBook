import { Component } from '@angular/core';
import { Welcome } from '../login/interface/login.interface';
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


