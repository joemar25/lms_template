import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSidebarComponent } from './student-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentSidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [StudentSidebarComponent],
})
export class StudentSidebarModule {}
