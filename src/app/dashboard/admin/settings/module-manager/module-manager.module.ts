import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleManagerRoutingModule } from './module-manager-routing.module';
import { ModuleManagerComponent } from './module-manager.component';
@NgModule({
  declarations: [ModuleManagerComponent],
  imports: [CommonModule, ModuleManagerRoutingModule],
})
export class ModuleManagerModule {}
