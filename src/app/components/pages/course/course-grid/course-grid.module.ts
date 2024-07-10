import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseGridRoutingModule } from './course-grid-routing.module';
import { CourseGridComponent } from './course-grid.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    CourseGridComponent
  ],
  imports: [
    CommonModule,
    CourseGridRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class CourseGridModule { }
