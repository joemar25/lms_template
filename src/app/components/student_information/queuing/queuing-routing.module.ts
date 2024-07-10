import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueuingComponent } from './queuing.component';

const routes: Routes = [
  {
    path: '',
    component: QueuingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueuingRoutingModule { }
