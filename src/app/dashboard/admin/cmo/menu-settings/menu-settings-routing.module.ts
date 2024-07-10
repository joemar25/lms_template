import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuSettingsComponent} from './menu-settings.component';

const routes: Routes = [
  {
    path: '',
    component: MenuSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuSettingsRoutingModule { }
