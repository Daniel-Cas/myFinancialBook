import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from './services/enterprise.service';
import { Enterprise, ListaJournal } from './interface/enterprise.interface';
import { Welcome } from '../login/interface/login.interface';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styles: [
  ]
})
export class EnterpriseComponent {

  getId(){
    return this.enterpriseService.getEnterprise().id
  }

  getName(){
    console.log(this.enterpriseService.getEnterprise().name)
    return this.enterpriseService.getEnterprise().name
  }

  getNit(){
    return this.enterpriseService.getEnterprise().nit
  }

  getDescription(){
    return this.enterpriseService.getEnterprise().description;
  }

  getDirection(){
    return this.enterpriseService.getEnterprise().direction
  }

  getTelephone(){
    return this.enterpriseService.getEnterprise().phoneNumber
  }

  getListJournal(){
    return this.enterpriseService.getEnterprise().listaJournal;
  }

  constructor( public enterpriseService : EnterpriseService
              ) {
                let welcomeEnterprise: Welcome  = {
                id: 0,
                name: 'a',
                nit: 0,
                description: 'a',
                direction: 'a',
                phoneNumber: 'a'
              };
              welcomeEnterprise = this.enterpriseService.getEnterprise() }
}
