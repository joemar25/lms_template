import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PusherComponent } from './pusher.component';

const routes: Routes = [
  {
    path: '',
    component: PusherComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PusherRoutingModule { }
