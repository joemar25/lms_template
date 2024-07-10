import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundNCancellationRoutingModule } from './refund-n-cancellation-routing.module';
import {RefundNCancellationComponent } from './refund-n-cancellation.component';


@NgModule({
  declarations: [RefundNCancellationComponent ],
  imports: [
    CommonModule,
    RefundNCancellationRoutingModule
  ]
})
export class RefundNCancellationModule { }
