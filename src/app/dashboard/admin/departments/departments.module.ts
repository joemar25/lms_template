import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentsComponent} from './departments.component';

import { DepartmentsRoutingModule } from './departments-routing.module';


@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
