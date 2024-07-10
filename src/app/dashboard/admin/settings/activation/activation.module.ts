import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivationRoutingModule } from './activation-routing.module';
import { ActivationComponent } from './activation.component';

@NgModule({
  declarations: [ActivationComponent],

  imports: [CommonModule, ActivationRoutingModule],
})
export class ActivationModule {}
