import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizedRoutingModule } from './personalized-routing.module';
import { PersonalizedComponent } from './personalized.component';


@NgModule({
  declarations: [PersonalizedComponent],
  imports: [
    CommonModule,
    PersonalizedRoutingModule
  ]
})
export class PersonalizedModule { }
