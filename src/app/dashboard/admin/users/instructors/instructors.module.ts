import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';

@NgModule({
  declarations: [InstructorsComponent],
  imports: [CommonModule, InstructorsRoutingModule],
})
export class InstructorsModule {}
