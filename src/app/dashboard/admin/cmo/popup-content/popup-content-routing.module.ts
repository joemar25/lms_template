import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopupContentComponent } from './popup-content.component';
const routes: Routes = [
  {
    path: '',
    component: PopupContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopupContentRoutingModule { }
