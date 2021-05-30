import { Component } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import {  Ledger } from '../login/interface/login.interface';


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styles: [
    `
    thead tr th {
      position: sticky;
      top: 0;
      z-index: 10;
      background-color: #2f2f2f;
    }

    .table-responsive {
      height: 800px;
      overflow: scroll;
    }

    .my-custom-scrollbar {
      position: relative;
      height: 1500px;
      overflow: auto;
    }
    .table-wrapper-scroll-y {
      display: block;
    }
  `
  ]
})
export class LedgerComponent {

Ledger!: Ledger[];

  constructor( private loginService: LoginService
              ) {
               this.loginService.getLedger()
               .subscribe ( resp => {
                 this.Ledger = resp;
               });
               }


}
