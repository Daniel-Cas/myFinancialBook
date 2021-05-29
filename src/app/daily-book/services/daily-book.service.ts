import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome } from '../../login/interface/login.interface';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class DailyBookService {


  constructor(private http: HttpClient,
              private loginService: LoginService) {

  }
}
