import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { HttpClient } from '@angular/common/http';
import { ListaJournal, Welcome } from 'src/app/login/interface/login.interface';
import Swal from 'sweetalert2';
import { LoginComponent } from '../../login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {


  private _url: string = '//localhost:8080/';

  id_enterprise: string = '';

  Enterprise!: Welcome;
 //Probando el home




  getEnterprise() {
    return this.Enterprise ;
  }



  // Que no se me olvide que este es la que hace la peticion http
  postBook(
    codigo: string,
    concepto: string,
    descripcion: string,
    saldo: string,
    precio: string
  ) {
    let saldoFinal: string = '';
    let id: any = this.getEnterprise().id?.toString();
    if (
      saldo.trim().toLowerCase() == 'credito' ||
      saldo.trim().toLowerCase() == 'crédito'
    ) {
      this.http
        .get<any>(`${this._url}BookDay/add`, {
          params: {
            code: codigo,
            credit: precio,
            debit: '0.0',
            description: descripcion,
            enterprise_id: id,
          },
        })
        .toPromise()
        .then((resp) => {

        });
    } else if (
      saldo.trim().toLowerCase() == 'debito' ||
      saldo.trim().toLowerCase() == 'débito'
    ) {
      this.http
        .get<any>(`${this._url}BookDay/add`, {
          params: {
            code: codigo,
            credit: '0.0',
            debit: precio,
            description: descripcion,
            enterprise_id: id,
          },
        })
        .toPromise()
        .then((resp) => {
          Swal.fire('Agregado Satisfactoriamente', '', 'success');
        });
    } else {
      console.log('Saldo no válido');
    }
  }




  httpUpdateBook(credito: string, debito: string, id: string){

    this.http.get<any>(`${this._url}BookDay/update`,{
      params:{
        credit: credito,
        debit: debito,
        id: id
      }
    }).toPromise().then( (resp) =>{
      if(resp){
      Swal.fire('Exito al actualizar','','success')
      }else{
        Swal.fire('Error al actualizar','','error');
      }
    })
  }


  httpDelete(id: string){
    this.http.get<any>(`${this._url}BookDay/delete`, {
      params:{
        id: id
      }
    }).toPromise().then( (resp) => {
      Swal.fire('Eliminado Satisfactoriamente', '', 'success');
    })
  }



  constructor(private loginService: LoginService,
              private http: HttpClient,
              ) {
                this.Enterprise = this.loginService.getEnterprise()
              }
}
