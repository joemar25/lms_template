import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuSettingsRoutingModule } from './menu-settings-routing.module';
import {MenuSettingsComponent} from './menu-settings.component';


@NgModule({
  declarations: [MenuSettingsComponent],
  imports: [
    CommonModule,
    MenuSettingsRoutingModule
  ]
})
export class MenuSettingsModule { }
