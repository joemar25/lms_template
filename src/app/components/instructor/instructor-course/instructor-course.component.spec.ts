import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseComponent } from './instructor-course.component';

describe('InstructorCourseComponent', () => {
  let component: InstructorCourseComponent;
  let fixture: ComponentFixture<InstructorCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
