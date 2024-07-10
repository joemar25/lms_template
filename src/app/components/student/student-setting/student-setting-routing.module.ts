import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSettingComponent } from './student-setting.component';
import { StudentLinkedAccountsComponent } from './student-linked-accounts/student-linked-accounts.component';
import { StudentNotificationsComponent } from './student-notifications/student-notifications.component';
import { StudentChangePasswordComponent } from './student-change-password/student-change-password.component';

const routes: Routes = [
  {
    path: '',
    component: StudentSettingComponent,
    children: [
      {
        path: 'student-linked-accounts',
        component: StudentLinkedAccountsComponent,
      },
      {
        path: 'student-notification',
        component: StudentNotificationsComponent,
      },
      {
        path: 'student-change-password',
        component: StudentChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentSettingRoutingModule {}
