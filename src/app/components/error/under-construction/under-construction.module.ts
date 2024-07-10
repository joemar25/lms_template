import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderConstructionRoutingModule } from './under-construction-routing.module';
import { UnderConstructionComponent } from './under-construction.component';


@NgModule({
  declarations: [
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    UnderConstructionRoutingModule
  ]
})
export class UnderConstructionModule { }
