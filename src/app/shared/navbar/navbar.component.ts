import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../login/services/login.service';
import { Welcome } from '../../login/interface/login.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  Enterprise!: Welcome;

  logout(){
    Swal.fire({
      title: '¿Seguro que quiere terminar la Sesión?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.loginService.setEnterprise( this.Enterprise );
        this.router.navigate(['/']);
      } else if (result.isDenied) {
      }
    })
  }


  constructor(private router: Router,
              private loginService: LoginService ) { }

}
