import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetails1Component } from './course-details1.component';

describe('CourseDetails1Component', () => {
  let component: CourseDetails1Component;
  let fixture: ComponentFixture<CourseDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
