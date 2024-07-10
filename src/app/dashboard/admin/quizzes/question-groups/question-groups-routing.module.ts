import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionGroupsComponent} from './question-groups.component';
const routes: Routes = [ {
  path: '',
  component: QuestionGroupsComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionGroupsRoutingModule { }
