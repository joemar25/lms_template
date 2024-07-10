import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationRoutingModule } from './localization-routing.module';
import { LocalizationComponent } from './localization.component';

@NgModule({
  declarations: [LocalizationComponent],
  imports: [CommonModule, LocalizationRoutingModule],
})
export class LocalizationModule {}
