import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { InstructorChangePasswordComponent } from './instructor-change-password/instructor-change-password.component';
import { InstructorSettingsComponent } from './instructor-settings/instructor-settings.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { InstructorSettingWithdrawComponent } from './instructor-setting-withdraw/instructor-setting-withdraw.component';
import { InstructorSettingNotificationsComponent } from './instructor-setting-notifications/instructor-setting-notifications.component';
import { InstructorDeleteAccountComponent } from './instructor-delete-account/instructor-delete-account.component';


@NgModule({
  declarations: [
    SettingsComponent,
    InstructorChangePasswordComponent,
    InstructorSettingsComponent,
    InstructorSettingWithdrawComponent,
    InstructorSettingNotificationsComponent,
    InstructorSettingWithdrawComponent,
    InstructorDeleteAccountComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
