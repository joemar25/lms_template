import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefundSettingsRoutingModule } from './refund-settings-routing.module';
import {RefundSettingsComponent} from './refund-settings.component';


@NgModule({
  declarations: [RefundSettingsComponent],
  imports: [
    CommonModule,
    RefundSettingsRoutingModule
  ]
})
export class RefundSettingsModule { }
