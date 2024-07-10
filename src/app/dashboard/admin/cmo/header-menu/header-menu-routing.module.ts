import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderMenuComponent} from './header-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderMenuRoutingModule { }
