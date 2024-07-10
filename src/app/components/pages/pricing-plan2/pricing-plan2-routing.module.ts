import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingPlan2Component } from './pricing-plan2.component';

const routes: Routes = [{ path: '', component: PricingPlan2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingPlan2RoutingModule { }
