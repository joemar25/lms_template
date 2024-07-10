import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeInstructorComponent } from './become-instructor.component';

const routes: Routes = [
  {
    path: '',
    component: BecomeInstructorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeInstructorRoutingModule {}
