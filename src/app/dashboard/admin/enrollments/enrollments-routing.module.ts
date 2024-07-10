import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './enrollments.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentsComponent,
    children: [
      {
        path: 'student-list/:courseId',
        loadChildren: () =>
          import('./student-list/student-list.module').then(
            (m) => m.StudentListModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentsRoutingModule { }