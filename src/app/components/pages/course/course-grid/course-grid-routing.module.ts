import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseGridComponent } from './course-grid.component';

const routes: Routes = [{ path: '', component: CourseGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseGridRoutingModule { }
