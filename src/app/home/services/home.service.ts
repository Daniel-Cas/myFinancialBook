import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { HttpClient } from '@angular/common/http';
import { Enterprise } from 'src/app/enterprise/interface/enterprise.interface';
import { Welcome } from 'src/app/login/interface/login.interface';

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

getEnterprise(){
  return this.enterprise;
}


  constructor(private loginService: LoginService,
              private http        : HttpClient) { 
  this.http.post(`${this._url}enterprise/find`,{
    id: 1
  }).toPromise().then((resp: any)=>{
    console.log("Es acá xd ")
    //this.enterprise = resp;
  });
  }
}
