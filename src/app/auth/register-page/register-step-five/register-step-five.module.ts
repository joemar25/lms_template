import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStepFiveRoutingModule } from './register-step-five-routing.module';
import { RegisterStepFiveComponent } from './register-step-five.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [RegisterStepFiveComponent],
  imports: [CommonModule, RegisterStepFiveRoutingModule, SharedModule],
})
export class RegisterStepFiveModule {}
