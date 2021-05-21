import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome } from '../interface/login.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url: string = '//localhost:8080/'
  private _enterprises: [] = []


  public id_enterprise: number | any = 0;

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
            this.id_enterprise = aux.id || undefined;
            console.log( this.id_enterprise)
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

  registerEnterprise( empresa: string, nit: number)  {

    let confirmation = false;
    this.http.get<[]>(`${ this._url}enterprise/list`)
    .subscribe( (resp) => {
      this.empresas = resp;
      this.empresas.forEach( element => {
        let aux: Welcome = element;
        if (aux.name == empresa && aux.nit == nit) {
          confirmation = false;
        }else{
          confirmation = true;
        }
      });
    });

    if(!confirmation){
      console.log(confirmation)
      let body = {
        nit: nit,
        name: empresa,
        direction: 'Está es la direccion',
        description: 'Esta es la descripcion',
        phoneNumber: 'Este es el numero'
      }
      this.http.get(`${ this._url  }enterprise/add?nit=${ body.nit }&name=${ body.name}&direction=${ body.direction}&description=${ body.description}&phoneNumber=${ body.phoneNumber}`).toPromise().then((datos: any)=>{
            alert('Empresa creada correctamente')
          })

        }
  }

  constructor(private http: HttpClient,
    private router: Router) { }
}
