import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';

@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule
  ]
})
export class EnrollmentsModule { }