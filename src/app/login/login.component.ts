import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './services/login.service';
import { EnterpriseService } from '../enterprise/services/enterprise.service';
import Swal from 'sweetalert2';
import { Welcome } from './interface/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {


  enterpriseArray!: Welcome[];
  enterprise!: Welcome;

  @ViewChild('txtUser') txtUser!: ElementRef<HTMLInputElement>;
  @ViewChild('txtPassword') txtPassword!: ElementRef<HTMLInputElement>;

  findUser() {
    const user = this.txtUser.nativeElement.value;
    const password = this.txtPassword.nativeElement.value;
    this.loginService.getEnterprises()
    .subscribe( (resp) =>{
      this.enterpriseArray = resp;
      let confirm: boolean = false;
     this.enterpriseArray.forEach( (enterprise) =>{
       if( enterprise.name == user && enterprise.nit == Number(password) ){
         confirm = true;
         this.enterprise = enterprise;
        Swal.fire('Crendenciales confirmadas','','success')
        this.loginService.setEnterprise( this.enterprise )
        this.loginService.setListaJournal( this.enterprise.listaJournal)
        this.router.navigate(['home']);
       }
     })
     if(!confirm){
       Swal.fire('Credenciales Incorrectas','Revisa los campos rellenados','error')
     }
    });
  }


  register() {

    const user = this.txtUser.nativeElement.value;
    const password = this.txtPassword.nativeElement.value;
    if (user.trim() == '' && Number(password.trim()) == 0) {
      Swal.fire('Campos vacíos','','error')
    } else {
      let    confirmation  = false;
      this.loginService.getEnterprises()
      .subscribe( (resp) =>{
        resp.forEach( element => {
        if (element.name == user && element.nit == Number( password )) {
          confirmation = true;
        }
        });
        if (!confirmation) {
           this.loginService.registerEnterprise(user,password)
             .toPromise()
             .then((datos: any) => {
               Swal.fire('Empresa creada correctamente','','success')
             });
         }else{
           console.log(confirmation)
           Swal.fire('Empresa ya existente','','error');
         }
      });
    }
  }


  constructor(
    public loginService: LoginService,
    public enterpriseService: EnterpriseService,
    private router: Router
  ) {}
}
