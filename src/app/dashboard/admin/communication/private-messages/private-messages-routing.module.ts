import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateMessagesComponent } from './private-messages.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateMessagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateMessagesRoutingModule { }
