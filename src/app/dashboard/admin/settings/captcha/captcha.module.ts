import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptchaRoutingModule } from './captcha-routing.module';
import { CaptchaComponent } from './captcha.component';

@NgModule({
  declarations: [CaptchaComponent],
  imports: [CommonModule, CaptchaRoutingModule],
})
export class CaptchaModule {}
