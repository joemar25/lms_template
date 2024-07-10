import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetails1Component } from './course-details1.component';

const routes: Routes = [{ path: '', component: CourseDetails1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetails1RoutingModule { }
