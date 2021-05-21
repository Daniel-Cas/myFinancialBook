import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class EnterpriseModule { }
