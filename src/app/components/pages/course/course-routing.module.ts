import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
      {
        path: 'add-course',
        loadChildren: () =>
          import('./add-course/add-course.module').then(
            (m) => m.AddCourseModule
          ),
      },
      {
        path: 'course-details',
        loadChildren: () =>
          import('./course-details/course-details.module').then(
            (m) => m.CourseDetailsModule
          ),
      },
      {
        path: 'course-grid',
        loadChildren: () =>
          import('./course-grid/course-grid.module').then(
            (m) => m.CourseGridModule
          ),
      },
      {
        path: 'course-list',
        loadChildren: () =>
          import('./course-list/course-list.module').then(
            (m) => m.CourseListModule
          ),
      },
      {
        path: 'course-message',
        loadChildren: () =>
          import('./course-message/course-message.module').then(
            (m) => m.CourseMessageModule
          ),
      },
      {
        path: 'course-wishlist',
        loadChildren: () =>
          import('./course-wishlist/course-wishlist.module').then(
            (m) => m.CourseWishlistModule
          ),
      },
    ],
  },
  { path: 'course-lesson', loadChildren: () => import('./course-lesson/course-lesson.module').then(m => m.CourseLessonModule) },
  { path: 'course-details1', loadChildren: () => import('./course-details1/course-details1.module').then(m => m.CourseDetails1Module) },
  { path: 'course-details2', loadChildren: () => import('./course-details2/course-details2.module').then(m => m.CourseDetails2Module) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
