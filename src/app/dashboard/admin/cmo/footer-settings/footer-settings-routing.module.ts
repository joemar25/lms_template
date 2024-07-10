import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterSettingsComponent} from './footer-settings.component';

const routes: Routes = [
  {
    path: '',
    component: FooterSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterSettingsRoutingModule { }
