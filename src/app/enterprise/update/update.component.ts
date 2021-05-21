import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Welcome } from '../../login/interface/login.interface';
import { HomeService } from '../../home/services/home.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent {

  private _url: string = '//localhost:8080/'
  private _enterprise: Welcome = {
    name: '',
    nit:0,
    id: 0
  }

  @ViewChild('txtEmpresa')txtEmpresa!:ElementRef<HTMLInputElement>;
  @ViewChild('txtDireccion')txtDireccion!:ElementRef<HTMLInputElement>;
  @ViewChild('txtDescripcion')txtDescripcion!:ElementRef<HTMLInputElement>;
  @ViewChild('txtTelefono')txtTelefono!:ElementRef<HTMLInputElement>;







  onCancel(){
    this.router.navigate(['/enterprise'])
  }

    onUpdate(){
      const enterprise  = this.txtEmpresa.nativeElement.value.trim();
      const direction   = this.txtDireccion.nativeElement.value.trim();
      const description = this.txtDescripcion.nativeElement.value.trim();
      const telephone   = this.txtTelefono.nativeElement.value.trim();
      let body = {
           id:          this._enterprise.id ,
           direction:   direction,
           name:        enterprise,
           description: description,
           phoneNumber: telephone
      }
      console.log(enterprise,description,direction,telephone);
      this.http.get<any>(`${this._url}enterprise/update?id=${ body.id }&direction=${ body.direction }&name=${ body.name }&description=${ body.description }&phoneNumber=${ body.phoneNumber }`)
      .toPromise().then( (resp) => {
        if(resp == ''){
          console.log(':D')
        }
      })


  }



  constructor( private router: Router,
               private enterpriseService: HomeService,
               private http: HttpClient) {
    let welcomeEnterprise: Welcome  = {
      id: 0,
      name: 'a',
      nit: 0,
      description: 'a',
      direction: 'a',
      phoneNumber: 'a'
    };
    welcomeEnterprise = this.enterpriseService.getEnterprise()
    this._enterprise = this.enterpriseService.getEnterprise()


    console.log( this.enterpriseService.getEnterprise() )
   }



}
