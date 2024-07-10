import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OurHeaderComponent } from './sidebar/header/header.component';
import { OurSidebarComponent } from './sidebar/sidebar.component';
import { CourseModalComponent } from '../components/custom-pages/course-modal/course-modal.component';

@NgModule({
  declarations: [DashboardComponent, CourseModalComponent],
  imports: [CommonModule, FormsModule, DashboardRoutingModule, OurHeaderComponent, OurSidebarComponent, ],
})
export class DashboardModule {}
