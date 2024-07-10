import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizationComponent } from './localization.component';

const routes: Routes = [
  {
    path: '',
    component: LocalizationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizationRoutingModule {}
