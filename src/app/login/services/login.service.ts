import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome } from '../interface/login.interface';
import { Router } from '@angular/router';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url: string = '//localhost:8080/'
  private _enterprises: [] = []


  credentialsValidate(user: string, pass: string) {
    const params = new HttpParams()
      .set('list', this._url);
    this.http.get<[]>(`${this._url}enterprise/list`)
      .subscribe((resp) => {
        this._enterprises = resp;
        let confirm = false;
        this._enterprises.forEach(element => {
          let aux: Welcome = element;
          console.log( aux.name )
          console.log( aux.nit)
          if (aux.name == user && aux.nit == Number(pass)) {

            
            confirm = true;
            this.router.navigate(['home']);
          }
          if (!confirm) {
            console.log('Ćredenciales incorrectas')
          }
        });
      });
  }


  private empresas: Welcome[] = []

  registerEnterprise( empresa: string, nit: string)  {

    this.http.get<[]>(`${ this._url}enterprise/list`)
    .subscribe( (resp) => {
      this.empresas = resp;
      this.empresas.forEach( element => {
        let aux: Welcome = element;
        if (aux.name == empresa && aux.nit == Number(nit)) {
          this.http.post(`${ this._url}enterprise/add`, {
            nit: nit,
            name: empresa,
            direction: '',
            description: '',
            phoneNumber: ''
          }).toPromise().then((datos: any)=>{
              //Acá los datos los envio a Enterprise


          })
          this.router.navigate((['home']));
        }else{
          console.log('Empresa ya existente')
        }
      });
    });
  }

  constructor(private http: HttpClient,
    private router: Router) { }
}
