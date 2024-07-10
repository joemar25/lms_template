import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorLogComponent } from './error-log.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorLogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorLogRoutingModule {}
