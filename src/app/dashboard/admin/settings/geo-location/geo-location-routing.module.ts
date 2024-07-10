import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeoLocationComponent } from './geo-location.component';

const routes: Routes = [
  {
    path: '',
    component: GeoLocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoLocationRoutingModule {}
