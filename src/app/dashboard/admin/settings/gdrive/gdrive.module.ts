import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdriveRoutingModule } from './gdrive-routing.module';
import { GdriveComponent } from './gdrive.component';

@NgModule({
  declarations: [GdriveComponent],
  imports: [CommonModule, GdriveRoutingModule],
})
export class GdriveModule {}
