import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupContentRoutingModule } from './popup-content-routing.module';
import { PopupContentComponent } from './popup-content.component';


@NgModule({
  declarations: [PopupContentComponent],
  imports: [
    CommonModule,
    PopupContentRoutingModule
  ]
})
export class PopupContentModule { }
