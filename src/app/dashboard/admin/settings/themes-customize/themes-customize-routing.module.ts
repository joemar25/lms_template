import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesCustomizeComponent } from './themes-customize.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesCustomizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesCustomizeRoutingModule { }
