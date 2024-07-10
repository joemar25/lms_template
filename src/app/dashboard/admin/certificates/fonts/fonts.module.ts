import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontsRoutingModule } from './fonts-routing.module';
import { FontsComponent } from './fonts.component';

@NgModule({
  declarations: [FontsComponent],
  imports: [
    CommonModule,
    FontsRoutingModule
  ]
})
export class FontsModule { }
