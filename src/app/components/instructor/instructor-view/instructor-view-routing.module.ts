import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorViewComponent } from './instructor-view.component';
import { InstructorGridComponent } from './instructor-grid/instructor-grid.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorViewComponent,
    children: [
      {
        path: 'instructor-grid',
        component: InstructorGridComponent,
      },
      {
        path: 'instructor-list',
        component: InstructorListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorViewRoutingModule {}
