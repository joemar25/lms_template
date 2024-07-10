import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobCategoryRoutingModule } from './job-category-routing.module';
import { JobCategoryComponent } from './job-category.component';


@NgModule({
  declarations: [
    JobCategoryComponent
  ],
  imports: [
    CommonModule,
    JobCategoryRoutingModule
  ]
})
export class JobCategoryModule { }
