import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error500RoutingModule } from './error500-routing.module';
import { Error500Component } from './error500.component';


@NgModule({
  declarations: [
    Error500Component
  ],
  imports: [
    CommonModule,
    Error500RoutingModule
  ]
})
export class Error500Module { }
