import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';
import { Enterprise } from './interfaces/home.interfaces';
import { Welcome } from '../login/interface/login.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{

  nombre: string = '';
  getEmpresa(){
  return this.nombre = this.homeService.getEnterprise().name.toLocaleUpperCase();
  }
  direction: string | undefined = '';
  getDirection() {
    return this.direction = this.homeService.getEnterprise().direction?.toLocaleUpperCase();
  }



  constructor( public homeService: HomeService) {
    let welcomeEnterprise: Enterprise  = {
      id: 0,
      name: '',
      nit: 0,
      description: '',
      direction: '',
      phoneNumber: ''
    };
    welcomeEnterprise = this.homeService.getEnterprise();
   }
  }


