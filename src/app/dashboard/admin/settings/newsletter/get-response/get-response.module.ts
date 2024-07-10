import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetResponseRoutingModule } from './get-response-routing.module';
import { GetResponseComponent } from './get-response.component';

@NgModule({
  declarations: [GetResponseComponent],
  imports: [CommonModule, GetResponseRoutingModule],
})
export class GetResponseModule {}
