import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnlineComponent} from './online.component';

import { OnlineRoutingModule } from './online-routing.module';


@NgModule({
  declarations: [OnlineComponent],
  imports: [
    CommonModule,
    OnlineRoutingModule
  ]
})
export class OnlineModule { }
