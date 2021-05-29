import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {




  constructor(private loginService: LoginService,
    private http: HttpClient) {

  }
}
