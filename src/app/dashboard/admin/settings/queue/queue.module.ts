import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';

@NgModule({
  declarations: [QueueComponent],
  imports: [
    CommonModule,
    QueueRoutingModule
  ]
})
export class QueueModule { }
