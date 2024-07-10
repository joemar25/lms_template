import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesFontRoutingModule } from './themes-font-routing.module';
import { ThemesFontComponent } from './themes-font.component';

@NgModule({
  declarations: [ThemesFontComponent],
  imports: [
    CommonModule,
    ThemesFontRoutingModule
  ]
})
export class ThemesFontModule { }
