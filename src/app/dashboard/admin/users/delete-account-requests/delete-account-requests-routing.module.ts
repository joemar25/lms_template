import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteAccountRequestsComponent } from './delete-account-requests.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteAccountRequestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAccountRequestsRoutingModule {}
