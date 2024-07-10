import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSettingTabComponent } from './student-setting-tab.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StudentSettingTabComponent],
  imports: [CommonModule, RouterModule],
  exports: [StudentSettingTabComponent],
})
export class StudentSettingTabModule {}
