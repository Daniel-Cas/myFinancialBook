import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Ledger } from '../interfaces/ledger.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  private _url:          string  = 'https://mfb-api.herokuapp.com/';
  private id_enterprise: string  = '';
  ledger: Ledger = {
    balance: false,
    code: 0,
    concept: '',
    total:0
  }

  journalLedger: [] = [];

  constructor( private loginService: LoginService,
               private http: HttpClient) {
                // this.id_enterprise = this.loginService.id_enterprise;
                 this.http.get<any>(`${this._url}Mayor/list`,{
                   params: {
                     id_enterprise: this.id_enterprise
                   }
                 }).toPromise().then( (resp) => {
                 this.journalLedger = resp;
                 })

   }
}
