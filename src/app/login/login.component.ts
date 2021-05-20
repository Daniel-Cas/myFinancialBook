import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './services/login.service';
import { EnterpriseService } from '../enterprise/services/enterprise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})


export class LoginComponent {

  constructor (   public loginService     : LoginService,
                  public enterpriseService: EnterpriseService) {}


   @ViewChild('txtUser')txtUser!:ElementRef<HTMLInputElement>;
   @ViewChild('txtPassword')txtPassword!:ElementRef<HTMLInputElement>;




   findUser() {
    const user     = this.txtUser.nativeElement.value;
    const password = this.txtPassword.nativeElement.value;

     this.loginService.credentialsValidate( user, password);
     this.enterpriseService.getEnterprise( user, password);
   }


   register() {
     const user = this.txtUser.nativeElement.value;
     const password = this.txtPassword.nativeElement.value;

     this.loginService.registerEnterprise( user, Number(password));
   }

}
