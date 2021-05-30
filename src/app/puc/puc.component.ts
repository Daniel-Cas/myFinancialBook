import { Component } from '@angular/core';
import { PucService } from './services/puc.service';

@Component({
  selector: 'app-puc',
  templateUrl: './puc.component.html',
  styles: [
  ]
})
export class PucComponent  {




  constructor( public pucService: PucService) {

  }



}
