import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteCodeRoutingModule } from './invite-code-routing.module';
import { InviteCodeComponent } from './invite-code.component';



@NgModule({
  declarations: [InviteCodeComponent],
  imports: [
    CommonModule,
    InviteCodeRoutingModule
  ]
})
export class InviteCodeModule { }
