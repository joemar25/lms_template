import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSystemComponent } from './update-system.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateSystemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateSystemRoutingModule { }
