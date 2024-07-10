import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimezoneRoutingModule } from './timezone-routing.module';
import { TimezoneComponent } from './timezone.component';

@NgModule({
  declarations: [TimezoneComponent],
  imports: [
    CommonModule,
    TimezoneRoutingModule
  ]
})
export class TimezoneModule { }
