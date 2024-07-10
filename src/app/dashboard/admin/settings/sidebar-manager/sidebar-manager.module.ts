import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarManagerRoutingModule } from './sidebar-manager-routing.module';
import { SidebarManagerComponent } from './sidebar-manager.component';

@NgModule({
  declarations: [SidebarManagerComponent],
  imports: [
    CommonModule,
    SidebarManagerRoutingModule
  ]
})
export class SidebarManagerModule { }
