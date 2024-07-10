import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionBanksRoutingModule } from './question-banks-routing.module';
import {QuestionBanksComponent} from './question-banks.component';


@NgModule({
  declarations: [QuestionBanksComponent],
  imports: [
    CommonModule,
    QuestionBanksRoutingModule
  ]
})
export class QuestionBanksModule { }
