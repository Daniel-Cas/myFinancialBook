import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  logout(){
    this.router.navigate(['/']);
  }


  constructor(private router: Router ) { }

}
