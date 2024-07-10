import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';

@NgModule({
  declarations: [StaffsComponent],
  imports: [CommonModule, StaffsRoutingModule],
})
export class StaffsModule {}
