import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { PurchaseHistoryComponent } from './purchase-history.component';


@NgModule({
  declarations: [
    PurchaseHistoryComponent
  ],
  imports: [
    CommonModule,
    PurchaseHistoryRoutingModule
  ]
})
export class PurchaseHistoryModule { }
