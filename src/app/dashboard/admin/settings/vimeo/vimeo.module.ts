import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VimeoRoutingModule } from './vimeo-routing.module';
import { VimeoComponent } from './vimeo.component';

@NgModule({
  declarations: [VimeoComponent],
  imports: [
    CommonModule,
    VimeoRoutingModule
  ]
})
export class VimeoModule { }
