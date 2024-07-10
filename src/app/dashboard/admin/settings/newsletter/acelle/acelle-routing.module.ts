import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcelleComponent } from './acelle.component';

const routes: Routes = [
  {
    path: '',
    component: AcelleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcelleRoutingModule {}
