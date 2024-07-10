import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorSettingTabComponent } from './instructor-setting-tab.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InstructorSettingTabComponent],
  imports: [CommonModule, RouterModule],
  exports: [InstructorSettingTabComponent],
})
export class InstructorSettingTabModule {}
