import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarManagerComponent } from './sidebar-manager.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarManagerRoutingModule { }
