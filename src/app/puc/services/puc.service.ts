import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Puc, Naturaleza } from '../interfaces/puc.interface';

@Injectable({
  providedIn: 'root'
})
export class PucService {

  private _url: string = '//localhost:8080/'

  puc: Puc[] = [{
    cod_contable: 0,
    concepto: '',
    naturaleza: Naturaleza.Credito
  }
]

  private pucs: []= []



  constructor(private http: HttpClient) {
    this.http.get<[]>(`${this._url}puc/list`)
     .subscribe((resp) => {
      this.puc = resp;
    })
  }
}
