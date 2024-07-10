import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsGridComponent } from './students-grid/students-grid.component';

const routes: Routes = [
  {
    path: '',
    component: StudentViewComponent,
    children: [
      {
        path: 'students-list',
        component: StudentsListComponent,
      },
      {
        path: 'students-grid',
        component: StudentsGridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentViewRoutingModule {}
