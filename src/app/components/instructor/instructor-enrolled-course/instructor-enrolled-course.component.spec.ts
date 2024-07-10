import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEnrolledCourseComponent } from './instructor-enrolled-course.component';

describe('InstructorEnrolledCourseComponent', () => {
  let component: InstructorEnrolledCourseComponent;
  let fixture: ComponentFixture<InstructorEnrolledCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorEnrolledCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorEnrolledCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
