import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdriveComponent } from './gdrive.component';

const routes: Routes = [
  {
    path: '',
    component: GdriveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GdriveRoutingModule {}
