import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpBlockRoutingModule } from './ip-block-routing.module';
import { IpBlockComponent } from './ip-block.component';
@NgModule({
  declarations: [IpBlockComponent],
  imports: [CommonModule, IpBlockRoutingModule],
})
export class IpBlockModule {}
