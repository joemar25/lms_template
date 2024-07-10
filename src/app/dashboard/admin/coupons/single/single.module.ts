import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { SingleComponent } from './single.component';

@NgModule({
  declarations: [SingleComponent],
  imports: [CommonModule, SingleRoutingModule],
})
export class SingleModule {}
