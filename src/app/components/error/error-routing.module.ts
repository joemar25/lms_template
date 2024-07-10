import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      {
        path: 'come-soon',
        loadChildren: () =>
          import('./come-soon/come-soon.module').then((m) => m.ComeSoonModule),
      },

      {
        path: '404',
        loadChildren: () =>
          import('./error404/error404.module').then((m) => m.Error404Module),
      },

      {
        path: '500',
        loadChildren: () =>
          import('./error500/error500.module').then((m) => m.Error500Module),
      },

      {
        path: 'under-construction',
        loadChildren: () =>
          import('./under-construction/under-construction.module').then(
            (m) => m.UnderConstructionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
