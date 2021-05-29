import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from './services/enterprise.service';
import { Enterprise, ListaJournal } from './interface/enterprise.interface';
import { Welcome } from '../login/interface/login.interface';
import { HomeService } from '../home/services/home.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styles: [
  ]
})
export class EnterpriseComponent {

  Enterprise!: Welcome;

  getId(){
    return this.Enterprise.id
  }

  getName(){
    return this.Enterprise.name
  }

  getNit(){
    return this.Enterprise.nit
  }

  getDescription(){
    return this.Enterprise.description;
  }

  getDirection(){
    return this.Enterprise.direction
  }

  getTelephone(){
    return this.Enterprise.phoneNumber
  }

  goUpdate(){
    this.router.navigate(['enterprise/update'])
  }

  constructor( public loginService: LoginService,
                private router: Router) {
                  this.loginService.findEnterprise()
                  .subscribe( resp =>{
                    this.Enterprise = resp;
                  })
             }
}
