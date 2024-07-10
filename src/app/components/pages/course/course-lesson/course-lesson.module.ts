import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseLessonRoutingModule } from './course-lesson-routing.module';
import { CourseLessonComponent } from './course-lesson.component';


@NgModule({
  declarations: [
    CourseLessonComponent
  ],
  imports: [
    CommonModule,
    CourseLessonRoutingModule
  ]
})
export class CourseLessonModule { }
