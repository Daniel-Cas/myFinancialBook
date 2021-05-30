import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ledger, ListaJournal, Welcome } from '../interface/login.interface';
import { Router } from '@angular/router';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _url: string = 'https://mfb-api.herokuapp.com/';

  Enterprise!: Welcome;
  ListJournal!: ListaJournal[] ;


  // Mettodos para obtener Empresa
  getEnterprise(){
    return this.Enterprise
  }

  setEnterprise( enterprise: Welcome){
    this.Enterprise = enterprise;
  }

  getListaJournal(){
    return this.ListJournal;
  }

  setListaJournal( listaJouranal: ListaJournal[]){
    this.ListJournal = listaJouranal;
  }

  getEnterprises(): Observable<Welcome[]> {
    const params = new HttpParams().set('list', this._url);
    return this.http.get<Welcome[]>(`${this._url}enterprise/list`)
  }


  getEnterpriseID( id: string): Observable<Welcome>{
    return this.http.get<Welcome>(`${this._url}enterprise/find=id=${ id }`);
  }


  registerEnterprise(empresa: string, nit: string): Observable<Welcome> {
    return this.http.get<Welcome>(`${this._url}enterprise/add?nit=${ nit }&name=${ empresa }&direction=${'This is a direction'}&description=${'This is a descriptiom'}&phoneNumber=${'000-000'}`)
  }


  findEnterprise(): Observable<Welcome>{
    return this.http.get<Welcome>(`${this._url}enterprise/find?id=${ this.Enterprise.id }`);
  }


  //Metodos de Actualizar Enterprise
  onUpdate(id: string, direction: string, name: string, description: string, phoneNumber: string): Observable<Boolean>{
    return this.http.get<Boolean>(`${this._url}enterprise/update?id=${id }&direction=${ direction }&name=${ name }&description=${ description }&phoneNumber=${ phoneNumber }`)
  }




  //Metodos Para Libro Diario

  //Agregar Libro diario en Credito y Debito
  addDailyBookCredit( code: string, credit: string, description: string, enterprise_id: number ): Observable<string>{
    const debit: number =0;
    return this.http.get<string>(`${ this._url}BookDay/add?code=${ code }&credit=${ credit }&debit=${ debit }&description=${ description }&enterprise_id=${ enterprise_id}`);
  }

  addDailyBookDebit(  code: string, debit: string, description: string, enterprise_id: number): Observable<string>{
    const credit: number = 0;
    return this.http.get<string>(`${ this._url}BookDay/add?code=${ code }&credit=${ credit }&debit=${ debit }&description=${ description }&enterprise_id=${ enterprise_id}`);
  }


  //Actualizar Libro diario

  updateDailyBookCredit(credito: string, id: string): Observable<boolean>{
    const debito: number = 0;
    return this.http.get<boolean>(`${this._url}BookDay/update?credit=${ credito }&debit=${ debito }&id=${ id }`);
  }

  updateDailyBookDebit( debito: string, id: string): Observable<boolean>{
    const credito: number = 0;
    return this.http.get<boolean>(`${this._url}BookDay/update?credit=${ credito }&debit=${ debito }&id=${ id }`);
  }

  //Eliminar Libro Diario

  deleteDailyBook( id: string ): Observable<boolean>{
    return this.http.get<boolean>(`${ this._url}BookDay/delete?id=${ id }`);
  }

  //Partida doble libro Diario
  doubleCounting( id: number, date: string): Observable<boolean>{
      return this.http.get<boolean>(`${this._url}BookDay/doubleCounting?enterprise_id=${ id }&date=${ date }`);
  }


  //Obtener el libro Mayor
  getLedger(): Observable<Ledger[]>{
    return this.http.get<Ledger[]>(`${ this._url}Mayor/list?id_enterprise=${ this.Enterprise.id }`);
  }

  constructor(private http: HttpClient, private router: Router) {}
}
