import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageContentRoutingModule } from './page-content-routing.module';
import { PageContentComponent } from './page-content.component';


@NgModule({
  declarations: [PageContentComponent],
  imports: [
    CommonModule,
    PageContentRoutingModule
  ]
})
export class PageContentModule { }
