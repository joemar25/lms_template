import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { StudentChangePasswordComponent } from './student-change-password/student-change-password.component';
import { StudentLinkedAccountsComponent } from './student-linked-accounts/student-linked-accounts.component';
import { StudentNotificationsComponent } from './student-notifications/student-notifications.component';
import { StudentSettingsComponent } from './student-settings/student-settings.component';
import { StudentSocialProfileComponent } from './student-social-profile/student-social-profile.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'student-change-password',
        component: StudentChangePasswordComponent,
      },
      {
        path: 'student-linked-accounts',
        component: StudentLinkedAccountsComponent,
      },
      {
        path: 'student-notifications',
        component: StudentNotificationsComponent,
      },
      {
        path: 'student-settings',
        component: StudentSettingsComponent,
      },
      {
        path: 'student-social-profile',
        component: StudentSocialProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
