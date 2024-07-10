import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RefundSettingsComponent} from './refund-settings.component';
const routes: Routes = [{
  path: '',
  component: RefundSettingsComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundSettingsRoutingModule { }
