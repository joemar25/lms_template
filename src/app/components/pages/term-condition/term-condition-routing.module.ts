import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermConditionComponent } from './term-condition.component';

const routes: Routes = [{ path: '', component: TermConditionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermConditionRoutingModule { }
