import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutAccountsRoutingModule } from './payout-accounts-routing.module';
import { PayoutAccountsComponent } from './payout-accounts.component';

@NgModule({
  declarations: [PayoutAccountsComponent],
  imports: [CommonModule, PayoutAccountsRoutingModule],
})
export class PayoutAccountsModule {}
