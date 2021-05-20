import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { DailyBookComponent } from './daily-book/daily-book.component';
import { PucComponent } from './puc/puc.component';
import { LedgerComponent } from './ledger/ledger.component';



const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'enterprise',
        component: EnterpriseComponent
    },
    {
        path: 'dailyBook',
        component: DailyBookComponent
    },
    {
        path: 'puc',
        component: PucComponent
    },
    {
        path: 'ledger',
        component: LedgerComponent
    },{
      path: '**',
      component: LoginComponent
    }
]



@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [

        RouterModule
    ]
})


export class AppRoutingModule{}
