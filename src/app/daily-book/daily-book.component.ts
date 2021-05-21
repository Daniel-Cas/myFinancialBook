import { Component, OnInit } from '@angular/core';
import { Welcome } from '../login/interface/login.interface';
import { HomeService } from '../home/services/home.service';
import { ListaJournal } from '../enterprise/interface/enterprise.interface';

@Component({
  selector: 'app-daily-book',
  templateUrl: './daily-book.component.html',
  styles: [
  ]
})
export class DailyBookComponent  {

  getListJournal(): ListaJournal[] | undefined {
    return this.dailyBookService.getEnterprise().listaJournal;
  }


  constructor( private dailyBookService: HomeService ) {
    let welcomeEnterprise: Welcome  = {
      id: 0,
      name: 'a',
      nit: 0,
      description: 'a',
      direction: 'a',
      phoneNumber: 'a'
    };
    welcomeEnterprise = this.dailyBookService.getEnterprise()
  }



}
