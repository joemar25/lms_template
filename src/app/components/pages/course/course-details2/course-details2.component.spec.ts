import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetails2Component } from './course-details2.component';

describe('CourseDetails2Component', () => {
  let component: CourseDetails2Component;
  let fixture: ComponentFixture<CourseDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
