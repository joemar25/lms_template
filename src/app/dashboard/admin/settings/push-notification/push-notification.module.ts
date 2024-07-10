import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushNotificationRoutingModule } from './push-notification-routing.module';
import { PushNotificationComponent } from './push-notification.component';
@NgModule({
  declarations: [PushNotificationComponent],
  imports: [CommonModule, PushNotificationRoutingModule ]
})
export class PushNotificationModule { }
