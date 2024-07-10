import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaManagerComponent } from './media-manager.component';

const routes: Routes = [
  {
    path: '',
    component: MediaManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaManagerRoutingModule {}
