import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionBanksComponent} from './question-banks.component';
const routes: Routes = [
  {
    path: '',
    component: QuestionBanksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionBanksRoutingModule { }
