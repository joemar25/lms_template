import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BecomeInstructorRoutingModule } from './become-instructor-routing.module';
import { BecomeInstructorComponent } from './become-instructor.component';

@NgModule({
  declarations: [BecomeInstructorComponent],
  imports: [CommonModule, BecomeInstructorRoutingModule],
})
export class BecomeInstructorModule {}
