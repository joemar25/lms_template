import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStepTwoRoutingModule } from './register-step-two-routing.module';
import { RegisterStepTwoComponent } from './register-step-two.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [RegisterStepTwoComponent],
  imports: [CommonModule, RegisterStepTwoRoutingModule, SharedModule],
})
export class RegisterStepTwoModule {}
