import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterRoutingModule } from './help-center-routing.module';
import { HelpCenterComponent } from './help-center.component';


@NgModule({
  declarations: [
    HelpCenterComponent
  ],
  imports: [
    CommonModule,
    HelpCenterRoutingModule
  ]
})
export class HelpCenterModule { }
