import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enterprise } from '../interface/enterprise.interface';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private _url = '//localhost:8080/'
  private _enterprises: [] = []
  public nombre = ''
  public mostrarNit = ''

  getEnterprise( user: string, nit: string) {
    this.http.get<Enterprise[]>(`${this._url}enterprise/list`)
      .subscribe((resp) => {
        this._enterprises.forEach(element => {
          let aux: Enterprise = element;
          console.log( aux.name )
          console.log( aux.nit)
          if (aux.name == user && aux.nit == Number(nit)) {
             this.nombre = user;
             this.mostrarNit = nit;
          }
        });


      });
    }

  constructor( private http: HttpClient) { }
}
