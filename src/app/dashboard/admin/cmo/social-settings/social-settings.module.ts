import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialSettingsRoutingModule } from './social-settings-routing.module';
import { SocialSettingsComponent } from './social-settings.component';


@NgModule({
  declarations: [SocialSettingsComponent],
  imports: [
    CommonModule,
    SocialSettingsRoutingModule
  ]
})
export class SocialSettingsModule { }
