import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      // {
      //   path: 'blog',
      //   loadChildren: () =>
      //     import('./blog/blog.module').then((m) => m.BlogModule),
      // },

       
      {
        path: 'mentors',
        loadChildren: () =>
          import('./custom-pages/mentors/mentors.module').then(
            (m) => m.MentorsModule
          ),
      },
        

      {
        path: 'instructor',
        loadChildren: () =>
          import('./instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },

      {
        path: 'admission',
        loadChildren: () =>
          import('../dashboard/users/admission/admission.module').then(
            (m) => m.AdmissionModule
          ),
      },
      {
        path: 'enrollment',
        loadChildren: () =>
          import('../dashboard/users/enrollment/enrollment.module').then(
            (m) => m.EnrollmentModule
          ),
      },
      
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'student',
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home-list/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
