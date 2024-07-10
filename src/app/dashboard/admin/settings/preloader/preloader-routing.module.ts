import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloaderComponent } from './preloader.component';

const routes: Routes = [
  {
    path: '',
    component: PreloaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreloaderRoutingModule { }
