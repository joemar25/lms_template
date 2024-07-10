import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterStepThreeRoutingModule } from './register-step-three-routing.module';
import { RegisterStepThreeComponent } from './register-step-three.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [RegisterStepThreeComponent],
  imports: [CommonModule, RegisterStepThreeRoutingModule, SharedModule],
})
export class RegisterStepThreeModule {}
