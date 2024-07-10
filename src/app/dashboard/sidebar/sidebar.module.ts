import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { OurSidebarRoutingModule } from './sidebar-routing.module';
import { OurSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [OurSidebarComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,  
    OurSidebarRoutingModule
  ],
})
export class SidebarModule {}
