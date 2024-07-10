import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemesCustomizeRoutingModule } from './themes-customize-routing.module';
import { ThemesCustomizeComponent } from './themes-customize.component';

@NgModule({
  declarations: [ThemesCustomizeComponent],
  imports: [
    CommonModule,
    ThemesCustomizeRoutingModule
  ]
})
export class ThemesCustomizeModule { }
