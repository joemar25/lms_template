import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScholarshipsComponent } from './scholarships.component';

const routes: Routes = [
  {
    path: '',
    component: ScholarshipsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScholarshipsRoutingModule { }
