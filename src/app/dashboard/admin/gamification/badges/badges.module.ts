import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent} from './badges.component';

import { BadgesRoutingModule } from './badges-routing.module';


@NgModule({
  declarations: [BadgesComponent],
  imports: [
    CommonModule,
    BadgesRoutingModule
  ]
})
export class BadgesModule { }
