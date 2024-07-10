import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetails2RoutingModule } from './course-details2-routing.module';
import { CourseDetails2Component } from './course-details2.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    CourseDetails2Component
  ],
  imports: [
    CommonModule,
    CourseDetails2RoutingModule,
    FeatherIconModule
  ]
})
export class CourseDetails2Module { }
