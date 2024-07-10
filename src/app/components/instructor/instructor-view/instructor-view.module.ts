import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorViewRoutingModule } from './instructor-view-routing.module';
import { InstructorViewComponent } from './instructor-view.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { InstructorGridComponent } from './instructor-grid/instructor-grid.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';


@NgModule({
  declarations: [
    InstructorViewComponent ,
    InstructorGridComponent,
    InstructorListComponent
  ],
  imports: [
    CommonModule,
    InstructorViewRoutingModule,
    SharedModule
  ]
})
export class InstructorViewModule { }
