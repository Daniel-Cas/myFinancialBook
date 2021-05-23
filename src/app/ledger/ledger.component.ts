import { Component } from '@angular/core';
import { LedgerService } from './services/ledger.service';
import { Ledger } from './interfaces/ledger.interfaces';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LoginService } from '../login/services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styles: [
  ]
})
export class LedgerComponent {






getLedger(): [] | any {
  return this.ledgerService.journalLedger
}

  constructor( private ledgerService: LedgerService
              ) {

               }


}
