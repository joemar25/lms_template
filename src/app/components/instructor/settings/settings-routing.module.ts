import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { InstructorChangePasswordComponent } from './instructor-change-password/instructor-change-password.component';
import { InstructorSettingsComponent } from './instructor-settings/instructor-settings.component';
import { InstructorSettingNotificationsComponent } from './instructor-setting-notifications/instructor-setting-notifications.component';
import { InstructorSettingWithdrawComponent } from './instructor-setting-withdraw/instructor-setting-withdraw.component';
import { InstructorDeleteAccountComponent } from './instructor-delete-account/instructor-delete-account.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'instructor-change-password',
        component: InstructorChangePasswordComponent,
      },
      {
        path: 'instructor-settings',
        component: InstructorSettingsComponent,
      },
      {
        path: 'instructor-delete-account',
        component: InstructorDeleteAccountComponent,
      },
      {
        path: 'instructor-setting-notifications',
        component: InstructorSettingNotificationsComponent,
      },
      {
        path: 'instructor-setting-withdraw',
        component: InstructorSettingWithdrawComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
