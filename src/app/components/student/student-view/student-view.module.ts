import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentViewRoutingModule } from './student-view-routing.module';
import { StudentViewComponent } from './student-view.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsGridComponent } from './students-grid/students-grid.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    StudentViewComponent,
    StudentsListComponent,
    StudentsGridComponent
  ],
  imports: [
    CommonModule,
    StudentViewRoutingModule,
    SharedModule
  ]
})
export class StudentViewModule { }
