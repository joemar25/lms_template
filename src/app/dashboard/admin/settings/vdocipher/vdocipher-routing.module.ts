import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VdocipherComponent } from './vdocipher.component';


const routes: Routes = [
  {
    path: '',
    component: VdocipherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VdocipherRoutingModule { }
