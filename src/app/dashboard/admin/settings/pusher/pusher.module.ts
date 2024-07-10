import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PusherRoutingModule } from './pusher-routing.module';
import { PusherComponent } from './pusher.component';

@NgModule({
  declarations: [PusherComponent],
  imports: [
    CommonModule, PusherRoutingModule ]
})
export class PusherModule { }
