import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import {BankComponent} from './bank.component';



@NgModule({
  declarations: [BankComponent],
  imports: [
    CommonModule,
    BankRoutingModule
  ]
})
export class BankModule { }
