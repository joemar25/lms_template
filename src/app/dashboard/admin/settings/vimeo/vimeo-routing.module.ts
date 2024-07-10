import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VimeoComponent } from './vimeo.component';

const routes: Routes = [
  {
    path: '',
    component: VimeoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VimeoRoutingModule { }
