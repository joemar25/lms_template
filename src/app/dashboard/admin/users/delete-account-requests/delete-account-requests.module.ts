import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteAccountRequestsRoutingModule } from './delete-account-requests-routing.module';
import { DeleteAccountRequestsComponent } from './delete-account-requests.component';

@NgModule({
  declarations: [DeleteAccountRequestsComponent],
  imports: [CommonModule, DeleteAccountRequestsRoutingModule],
})
export class DeleteAccountRequestsModule {}
