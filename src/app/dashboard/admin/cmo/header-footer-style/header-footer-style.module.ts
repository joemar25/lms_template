import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderFooterStyleRoutingModule } from './header-footer-style-routing.module';
import {HeaderFooterStyleComponent} from './header-footer-style.component';


@NgModule({
  declarations: [ HeaderFooterStyleComponent],
  imports: [
    CommonModule,
    HeaderFooterStyleRoutingModule
  ]
})
export class HeaderFooterStyleModule { }
