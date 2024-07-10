import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoRoutingModule } from './seo-routing.module';
import { SeoComponent } from './seo.component';


@NgModule({
  declarations: [SeoComponent],
  imports: [
    CommonModule,
    SeoRoutingModule
  ]
})
export class SeoModule { }
