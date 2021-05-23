import { Component } from '@angular/core';
import { LedgerService } from './services/ledger.service';
import { Ledger } from './interfaces/ledger.interfaces';

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

  constructor( private ledgerService: LedgerService ,
              ) { }


}
