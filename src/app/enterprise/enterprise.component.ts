import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from './services/enterprise.service';
import { Enterprise } from './interface/enterprise.interface';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styles: [
  ]
})
export class EnterpriseComponent {

  // private enterprise: Enterprise = {}  || undefined
  

  

  constructor( public enterpriseService : EnterpriseService) { }
}