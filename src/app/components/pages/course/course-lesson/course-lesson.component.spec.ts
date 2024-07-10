import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLessonComponent } from './course-lesson.component';

describe('CourseLessonComponent', () => {
  let component: CourseLessonComponent;
  let fixture: ComponentFixture<CourseLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
