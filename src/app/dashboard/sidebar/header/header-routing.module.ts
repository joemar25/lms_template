import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurHeaderComponent } from './header.component';
const routes: Routes = [
  {
    path: '',
    component: OurHeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurHeaderRoutingModule {}
