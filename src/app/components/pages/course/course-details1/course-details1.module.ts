import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetails1RoutingModule } from './course-details1-routing.module';
import { CourseDetails1Component } from './course-details1.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    CourseDetails1Component
  ],
  imports: [
    CommonModule,
    CourseDetails1RoutingModule,
    FeatherIconModule
  ]
})
export class CourseDetails1Module { }
