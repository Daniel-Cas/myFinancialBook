import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { HttpClient } from '@angular/common/http';
import { ListaJournal, Welcome } from 'src/app/login/interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _url: string           = '//localhost:8080/'
  private enterprise: Welcome = {
    name:'',
    nit: 0,
    id: 0
  }
  id_enterprise: string = '';


getEnterprise(){
  return this.enterprise;
}

  constructor(private loginService: LoginService,
              private http        : HttpClient) {
                this.id_enterprise = this.loginService.id_enterprise;
  this.http.get<any>(`${this._url}enterprise/find`, {
    params:{
      id: this.id_enterprise
    }
  }).toPromise().then((resp: any)=>{
    this.enterprise = resp;
  });
  }
}
