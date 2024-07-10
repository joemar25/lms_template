import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesFontComponent } from './themes-font.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesFontComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesFontRoutingModule { }
