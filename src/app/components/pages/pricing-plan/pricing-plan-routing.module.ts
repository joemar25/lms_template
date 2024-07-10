import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingPlanComponent } from './pricing-plan.component';

const routes: Routes = [{ path: '', component: PricingPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingPlanRoutingModule { }
