import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderFooterStyleComponent} from './header-footer-style.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderFooterStyleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderFooterStyleRoutingModule { }
