import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { StudentLinkedAccountsComponent } from './student-linked-accounts/student-linked-accounts.component';
import { StudentChangePasswordComponent } from './student-change-password/student-change-password.component';
import { StudentSettingsComponent } from './student-settings/student-settings.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { StudentNotificationsComponent } from './student-notifications/student-notifications.component';
import { StudentSocialProfileComponent } from './student-social-profile/student-social-profile.component';

@NgModule({
  declarations: [
    SettingsComponent,
    StudentLinkedAccountsComponent,
    StudentChangePasswordComponent,
    StudentSettingsComponent,
    StudentNotificationsComponent,
    StudentSocialProfileComponent
  ],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
