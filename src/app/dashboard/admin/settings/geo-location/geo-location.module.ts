import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeoLocationRoutingModule } from './geo-location-routing.module';
import { GeoLocationComponent } from './geo-location.component';

@NgModule({
  declarations: [GeoLocationComponent],
  imports: [CommonModule, GeoLocationRoutingModule],
})
export class GeoLocationModule {}
