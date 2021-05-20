import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enterprise } from '../interface/enterprise.interface';
import { LoginService } from '../../login/services/login.service';
import { Welcome } from '../../login/interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private _url             = '//localhost:8080/'
   enterprise: Welcome = {
    name:'',
    nit: 0,
    id: 0
  }

    id_enterprise: string = '';


   getEnterprise(){
    return this.enterprise;
  }





  constructor( private http: HttpClient,
               private loginService: LoginService) {
                console.log(loginService.id_enterprise)
                this.id_enterprise = this.loginService.id_enterprise;
  this.http.get<any>(`${this._url}enterprise/find`, {
    params:{
      id: this.id_enterprise
    }
  }).toPromise().then((resp: any)=>{
    this.enterprise = resp;
    console.log(resp)
  });
  }
}
