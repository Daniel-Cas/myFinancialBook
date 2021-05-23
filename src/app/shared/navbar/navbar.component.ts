import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  logout(){
    Swal.fire({
      title: '¿Seguro que quiere terminar la Sesión?',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/']);
      } else if (result.isDenied) {
      }
    })
  }


  constructor(private router: Router ) { }

}
