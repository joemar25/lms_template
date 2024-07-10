import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginRoutingModule } from './social-login-routing.module';
import { SocialLoginComponent } from './social-login.component';

@NgModule({
  declarations: [SocialLoginComponent],
  imports: [
    CommonModule,
    SocialLoginRoutingModule
  ]
})
export class SocialLoginModule { }
