import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Welcome } from '../../login/interface/login.interface';
import Swal from 'sweetalert2';
import { LoginService } from '../../login/services/login.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent {

  private _url: string = 'https://mfb-api.herokuapp.com/'
  Enterprise!: Welcome;

  @ViewChild('txtEmpresa')txtEmpresa!:ElementRef<HTMLInputElement>;
  @ViewChild('txtDireccion')txtDireccion!:ElementRef<HTMLInputElement>;
  @ViewChild('txtDescripcion')txtDescripcion!:ElementRef<HTMLInputElement>;
  @ViewChild('txtTelefono')txtTelefono!:ElementRef<HTMLInputElement>;







  onCancel(){
    this.router.navigate(['/enterprise'])
  }

    onUpdate(){
      const enterprise  = this.txtEmpresa.nativeElement.value.trim();
      const direction   = this.txtDireccion.nativeElement.value.trim();
      const description = this.txtDescripcion.nativeElement.value.trim();
      const telephone   = this.txtTelefono.nativeElement.value.trim();

      if( enterprise != '' && direction != '' && description != '' && telephone != '' && enterprise != '' ){

      this.loginService.onUpdate( this.Enterprise.id!.toString(), direction, enterprise,description,telephone)
      .toPromise().then( (resp) => {
        if(resp){
          Swal.fire({
            icon: 'success',
            title: 'Empresa Actualizada correctamente',
            text: 'Something went wrong!',
          })
        }else{
          Swal.fire('Algo ha salido mal',' Intenta cerrar sesion e iniciar de nuevo','error')
        }
      })
    }else{
      Swal.fire('Campos vacios','revise los campos nuevamente debe ingresar todos los datos ','error')
    }

  }



  constructor( private router: Router,
               private loginService: LoginService)
                {
                  this.Enterprise = loginService.getEnterprise()
                 this.loginService.getEnterpriseID( this.Enterprise.id!.toString() )

   }



}
