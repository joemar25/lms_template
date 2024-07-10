import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPlanRoutingModule } from './pricing-plan-routing.module';
import { PricingPlanComponent } from './pricing-plan.component';


@NgModule({
  declarations: [
    PricingPlanComponent
  ],
  imports: [
    CommonModule,
    PricingPlanRoutingModule
  ]
})
export class PricingPlanModule { }
