import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteSettingsComponent } from './invite-settings.component';
const routes: Routes = [
  {
    path: '',
    component: InviteSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteSettingsRoutingModule { }
