import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome } from '../../login/interface/login.interface';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class DailyBookService {
  private _url: string = '//localhost:8080/';
  public enterprise: Welcome = {
    name: '',
    nit: 0,
    id: 0,
  };

  id_enterprise: string = '';

  getEnterprise() {
    return this.enterprise;
  }



  constructor(private http: HttpClient,
              private loginService: LoginService) {
    this.id_enterprise = this.loginService.id_enterprise;
    this.http
      .get<any>(`${this._url}enterprise/find`, {
        params: {
          id: this.id_enterprise,
        },
      })
      .toPromise()
      .then((resp: any) => {
        this.enterprise = resp;
        console.log(this.enterprise)
      });
  }
}
