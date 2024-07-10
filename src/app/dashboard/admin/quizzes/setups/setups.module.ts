import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupsRoutingModule } from './setups-routing.module';
import {SetupsComponent} from './setups.component';


@NgModule({
  declarations: [SetupsComponent],
  imports: [
    CommonModule,
    SetupsRoutingModule
  ]
})
export class SetupsModule { }
