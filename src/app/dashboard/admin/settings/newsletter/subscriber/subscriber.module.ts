import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriberRoutingModule } from './subscriber-routing.module';
import { SubscriberComponent } from './subscriber.component';
@NgModule({
  declarations: [SubscriberComponent],
  imports: [CommonModule, SubscriberRoutingModule],
})
export class SubscriberModule {}
