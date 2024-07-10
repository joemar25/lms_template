import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMessagesRoutingModule } from './private-messages-routing.module';
import { PrivateMessagesComponent } from './private-messages.component';


@NgModule({
  declarations: [PrivateMessagesComponent],
  imports: [
    CommonModule,
    PrivateMessagesRoutingModule
  ]
})
export class PrivateMessagesModule { }
