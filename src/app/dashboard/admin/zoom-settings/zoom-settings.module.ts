import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomSettingsRoutingModule } from './zoom-settings-routing.module';
import { ZoomSettingsComponent } from './zoom-settings.component';

@NgModule({
  declarations: [ZoomSettingsComponent],
  imports: [CommonModule, ZoomSettingsRoutingModule],
})
export class ZoomSettingsModule {}
