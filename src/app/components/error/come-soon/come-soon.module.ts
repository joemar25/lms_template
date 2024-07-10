import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComeSoonRoutingModule } from './come-soon-routing.module';
import { ComeSoonComponent } from './come-soon.component';


@NgModule({
  declarations: [
    ComeSoonComponent
  ],
  imports: [
    CommonModule,
    ComeSoonRoutingModule
  ]
})
export class ComeSoonModule { }
