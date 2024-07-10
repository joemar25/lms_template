import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailchimpRoutingModule } from './mailchimp-routing.module';
import { MailchimpComponent } from './mailchimp.component';

@NgModule({
  declarations: [MailchimpComponent],
  imports: [CommonModule, MailchimpRoutingModule],
})
export class MailchimpModule {}
