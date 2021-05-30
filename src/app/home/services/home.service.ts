import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { HttpClient } from '@angular/common/http';
import {  Welcome } from 'src/app/login/interface/login.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {


  private _url: string = 'https://mfb-api.herokuapp.com/';

  id_enterprise: string = '';

  Enterprise!: Welcome;
 //Probando el home





  constructor(private loginService: LoginService,
              private http: HttpClient,
              ) {
                this.Enterprise = this.loginService.getEnterprise()
              }
}
