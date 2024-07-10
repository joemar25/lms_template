import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutRoutingModule } from './payout-routing.module';
import { PayoutComponent } from './payout.component';

@NgModule({
  declarations: [PayoutComponent],
  imports: [CommonModule, PayoutRoutingModule],
})
export class PayoutModule {}
