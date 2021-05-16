import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PucComponent } from './puc/puc.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { DailyBookComponent } from './daily-book/daily-book.component';
import { LegderComponent } from './legder/legder.component';
import { LedgerComponent } from './ledger/ledger.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PucComponent,
    EnterpriseComponent,
    DailyBookComponent,
    LegderComponent,
    LedgerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
