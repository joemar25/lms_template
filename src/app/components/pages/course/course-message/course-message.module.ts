import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseMessageRoutingModule } from './course-message-routing.module';
import { CourseMessageComponent } from './course-message.component';


@NgModule({
  declarations: [
    CourseMessageComponent
  ],
  imports: [
    CommonModule,
    CourseMessageRoutingModule
  ]
})
export class CourseMessageModule { }
