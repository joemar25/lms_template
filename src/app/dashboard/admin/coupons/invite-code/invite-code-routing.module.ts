import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviteCodeComponent } from './invite-code.component';

const routes: Routes = [
  {
    path: '',
    component: InviteCodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteCodeRoutingModule { }
