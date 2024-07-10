import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsRoutingModule } from './levels-routing.module';
import {LevelsComponent} from './levels.component';


@NgModule({
  declarations: [LevelsComponent],
  imports: [
    CommonModule,
    LevelsRoutingModule
  ]
})
export class LevelsModule { }
