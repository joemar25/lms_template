import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuizDetailsComponent } from './student-quiz-details.component';

describe('StudentQuizDetailsComponent', () => {
  let component: StudentQuizDetailsComponent;
  let fixture: ComponentFixture<StudentQuizDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentQuizDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentQuizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
