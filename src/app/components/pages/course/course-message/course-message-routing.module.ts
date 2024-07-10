import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseMessageComponent } from './course-message.component';

const routes: Routes = [{ path: '', component: CourseMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseMessageRoutingModule { }
