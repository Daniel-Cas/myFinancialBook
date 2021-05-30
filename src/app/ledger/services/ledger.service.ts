import { Injectable } from '@angular/core';
import { LoginService } from '../../login/services/login.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {



  constructor( private loginService: LoginService,
               private http: HttpClient) {

   }
}
