import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment.component';
@NgModule({
  declarations: [EnrollmentComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,  
    EnrollmentRoutingModule
  ],
})
export class EnrollmentModule {}
