// src/app/shared/module/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { EditorModule } from 'primeng/editor';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CountUpModule } from 'ngx-countup';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconModule } from './feather.module';
import {
  BsDatepickerConfig,
  BsDatepickerModule,
  BsDaterangepickerConfig,
} from 'ngx-bootstrap/datepicker';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

import { InstructorSettingTabModule } from 'src/app/components/instructor/common/instructor-setting-tab/instructor-setting-tab.module';
import { InstructorSidebarModule } from 'src/app/components/instructor/common/instructor-sidebar/instructor-sidebar.module';
import { StudentSettingTabModule } from 'src/app/components/student/common/student-setting-tab/student-setting-tab.module';
import { StudentSidebarModule } from 'src/app/components/student/common/student-sidebar/student-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule,
    CarouselModule,
    NgScrollbarModule,
    EditorModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      space: -10,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      animationDuration: 1000,
      clockwise: false,
      startFromZero: false,
      lazy: false,
      outerStrokeLinecap: 'square',
      showSubtitle: false,
      showTitle: false,
      showUnits: false,
      showBackground: false,
    }),
    CountUpModule,
    SlickCarouselModule,
    NgApexchartsModule,
    FeatherIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSliderModule,
    MatSortModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    BsDatepickerModule,
    InstructorSettingTabModule,
    InstructorSidebarModule,
    StudentSettingTabModule,
    StudentSidebarModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TooltipModule,
    CarouselModule,
    NgScrollbarModule,
    EditorModule,
    NgCircleProgressModule,
    CountUpModule,
    SlickCarouselModule,
    NgApexchartsModule,
    FeatherIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSliderModule,
    MatSortModule,
    MatCardModule,
    MatStepperModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    BsDatepickerModule,
    InstructorSettingTabModule,
    InstructorSidebarModule,
    StudentSettingTabModule,
    StudentSidebarModule,
  ],
  providers: [BsDatepickerConfig, DatePipe, BsDaterangepickerConfig],
})
export class SharedModule {}
