import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStepOneRoutingModule } from './register-step-one-routing.module';
import { RegisterStepOneComponent } from './register-step-one.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [RegisterStepOneComponent],
  imports: [CommonModule, RegisterStepOneRoutingModule, SharedModule],
})
export class RegisterStepOneModule {}
