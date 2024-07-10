import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPlan2RoutingModule } from './pricing-plan2-routing.module';
import { PricingPlan2Component } from './pricing-plan2.component';


@NgModule({
  declarations: [
    PricingPlan2Component
  ],
  imports: [
    CommonModule,
    PricingPlan2RoutingModule
  ]
})
export class PricingPlan2Module { }
