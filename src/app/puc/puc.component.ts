import { Component, OnInit } from '@angular/core';
import { Puc, Naturaleza } from './interfaces/puc.interface';
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
