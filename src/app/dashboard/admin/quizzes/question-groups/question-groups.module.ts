import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionGroupsRoutingModule } from './question-groups-routing.module';
import {QuestionGroupsComponent} from './question-groups.component';


@NgModule({
  declarations: [QuestionGroupsComponent],
  imports: [
    CommonModule,
    QuestionGroupsRoutingModule
  ]
})
export class QuestionGroupsModule { }
