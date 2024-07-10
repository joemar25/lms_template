import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStepFourRoutingModule } from './register-step-four-routing.module';
import { RegisterStepFourComponent } from './register-step-four.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [RegisterStepFourComponent],
  imports: [CommonModule, RegisterStepFourRoutingModule, SharedModule],
})
export class RegisterStepFourModule {}
