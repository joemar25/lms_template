import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualClassesRoutingModule } from './virtual-classes-routing.module';
import { VirtualClassesComponent } from './virtual-classes.component';

@NgModule({
  declarations: [VirtualClassesComponent],
  imports: [CommonModule, VirtualClassesRoutingModule],
})
export class VirtualClassesModule {}
