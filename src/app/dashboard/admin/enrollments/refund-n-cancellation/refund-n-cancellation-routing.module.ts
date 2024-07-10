import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RefundNCancellationComponent } from './refund-n-cancellation.component';
const routes: Routes = [ {
  path: '',
  component: RefundNCancellationComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundNCancellationRoutingModule { }
