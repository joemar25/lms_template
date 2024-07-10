import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupsComponent} from './setups.component';
const routes: Routes = [ 
  {
    path: '',
    component: SetupsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupsRoutingModule { }
