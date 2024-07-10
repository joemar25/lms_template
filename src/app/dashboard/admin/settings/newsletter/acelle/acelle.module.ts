import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcelleRoutingModule } from './acelle-routing.module';
import { AcelleComponent } from './acelle.component';

@NgModule({
  declarations: [AcelleComponent],
  imports: [CommonModule, AcelleRoutingModule],
})
export class AcelleModule {}
