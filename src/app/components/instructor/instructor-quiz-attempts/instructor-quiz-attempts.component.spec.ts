import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorQuizAttemptsComponent } from './instructor-quiz-attempts.component';

describe('InstructorQuizAttemptsComponent', () => {
  let component: InstructorQuizAttemptsComponent;
  let fixture: ComponentFixture<InstructorQuizAttemptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorQuizAttemptsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorQuizAttemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
