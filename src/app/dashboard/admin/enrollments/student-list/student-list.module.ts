import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  }
];

@NgModule({
  declarations: [StudentListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentListModule { }