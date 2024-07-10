import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialSettingsComponent } from './social-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SocialSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialSettingsRoutingModule { }
