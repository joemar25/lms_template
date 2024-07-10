import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VdocipherRoutingModule } from './vdocipher-routing.module';
import { VdocipherComponent } from './vdocipher.component';

@NgModule({
  declarations: [VdocipherComponent],
  imports: [
    CommonModule,
    VdocipherRoutingModule
  ]
})
export class VdocipherModule { }
