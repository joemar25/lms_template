import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetails2Component } from './course-details2.component';

const routes: Routes = [{ path: '', component: CourseDetails2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetails2RoutingModule { }
