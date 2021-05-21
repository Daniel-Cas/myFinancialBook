import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { UpdateComponent } from '../../daily-book/update/update.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    UpdateComponent
    ],
  imports: [
    CommonModule,
    NavbarComponent
  ]
})
export class UpdateModule { }
