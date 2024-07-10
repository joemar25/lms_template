import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookieRoutingModule } from './cookie-routing.module';
import { CookieComponent } from './cookie.component';

@NgModule({
  declarations: [CookieComponent],
  imports: [CommonModule, CookieRoutingModule],
})
export class CookieModule {}
