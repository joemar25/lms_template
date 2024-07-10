import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorSidebarComponent } from './instructor-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InstructorSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [InstructorSidebarComponent],
})
export class InstructorSidebarModule {}
