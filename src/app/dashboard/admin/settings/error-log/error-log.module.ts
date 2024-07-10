import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorLogRoutingModule } from './error-log-routing.module';
import { ErrorLogComponent } from './error-log.component';
@NgModule({
  declarations: [ErrorLogComponent],
  imports: [CommonModule, ErrorLogRoutingModule],
})
export class ErrorLogModule {}
