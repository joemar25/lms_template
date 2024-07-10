import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteSettingsComponent } from './invite-settings.component';

import { InviteSettingsRoutingModule } from './invite-settings-routing.module';


@NgModule({
  declarations: [InviteSettingsComponent],
  imports: [
    CommonModule,
    InviteSettingsRoutingModule
  ]
})
export class InviteSettingsModule { }
