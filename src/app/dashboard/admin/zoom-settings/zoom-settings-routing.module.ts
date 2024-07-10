import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomSettingsComponent } from './zoom-settings.component';

const routes: Routes = [
  {
    path: '',
    component: ZoomSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZoomSettingsRoutingModule {}
