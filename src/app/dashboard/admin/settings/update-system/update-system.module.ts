import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSystemRoutingModule } from './update-system-routing.module';
import { UpdateSystemComponent } from './update-system.component';

@NgModule({
  declarations: [UpdateSystemComponent],
  imports: [
    CommonModule,
    UpdateSystemRoutingModule
  ]
})
export class UpdateSystemModule { }
