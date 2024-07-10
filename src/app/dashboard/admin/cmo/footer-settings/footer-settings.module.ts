import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterSettingsRoutingModule } from './footer-settings-routing.module';
import {FooterSettingsComponent} from './footer-settings.component';

@NgModule({
  declarations: [FooterSettingsComponent],
  imports: [
    CommonModule,
    FooterSettingsRoutingModule
  ]
})
export class FooterSettingsModule { }
