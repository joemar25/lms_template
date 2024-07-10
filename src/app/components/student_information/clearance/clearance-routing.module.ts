import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearanceComponent } from './clearance.component';

const routes: Routes = [
  {
    path: '',
    component: ClearanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearanceRoutingModule { }
