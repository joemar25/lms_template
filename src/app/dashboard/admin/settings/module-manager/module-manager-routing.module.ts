import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleManagerComponent } from './module-manager.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleManagerRoutingModule {}
