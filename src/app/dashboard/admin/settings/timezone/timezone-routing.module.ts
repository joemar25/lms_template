import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimezoneComponent } from './timezone.component';

const routes: Routes = [
  {
    path: '',
    component: TimezoneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimezoneRoutingModule { }
