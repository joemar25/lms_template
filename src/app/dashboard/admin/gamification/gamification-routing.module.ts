import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamificationComponent} from './gamification.component';
const routes: Routes = [ {
  path: '',
  component: GamificationComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamificationRoutingModule { }
