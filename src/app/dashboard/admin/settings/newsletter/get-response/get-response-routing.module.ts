import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetResponseComponent } from './get-response.component';

const routes: Routes = [
  {
    path: '',
    component: GetResponseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetResponseRoutingModule {}
