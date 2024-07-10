import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GamificationComponent} from './gamification.component';

import { GamificationRoutingModule } from './gamification-routing.module';


@NgModule({
  declarations: [GamificationComponent],
  imports: [
    CommonModule,
    GamificationRoutingModule
  ]
})
export class GamificationModule { }
