import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidersRoutingModule } from './sliders-routing.module';
import { SlidersComponent } from './sliders.component';


@NgModule({
  declarations: [SlidersComponent],
  imports: [
    CommonModule,
    SlidersRoutingModule
  ]
})
export class SlidersModule { }
