import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizedComponent } from './personalized.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizedRoutingModule { }
