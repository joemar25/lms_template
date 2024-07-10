import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuRoutingModule } from './header-menu-routing.module';
import {HeaderMenuComponent} from './header-menu.component';



@NgModule({
  declarations: [HeaderMenuComponent],
  imports: [
    CommonModule,
    HeaderMenuRoutingModule
  ]
})
export class HeaderMenuModule { }
