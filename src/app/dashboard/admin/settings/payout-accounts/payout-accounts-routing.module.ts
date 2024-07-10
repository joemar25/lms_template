import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutAccountsComponent } from './payout-accounts.component';

const routes: Routes = [
  {
    path: '',
    component: PayoutAccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutAccountsRoutingModule {}
