import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailTemplateRoutingModule } from './email-template-routing.module';
import { EmailTemplateComponent } from './email-template.component';

@NgModule({
  declarations: [EmailTemplateComponent],
  imports: [CommonModule, EmailTemplateRoutingModule],
})
export class EmailTemplateModule {}
