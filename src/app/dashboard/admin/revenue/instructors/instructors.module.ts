import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InstructorsComponent } from './instructors.component';

import { InstructorsRoutingModule } from './instructors-routing.module';


@NgModule({
  declarations: [InstructorsComponent],
  imports: [
    CommonModule,
    InstructorsRoutingModule
  ]
})
export class InstructorsModule { }
