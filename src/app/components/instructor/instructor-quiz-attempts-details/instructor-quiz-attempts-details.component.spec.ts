import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorQuizAttemptsDetailsComponent } from './instructor-quiz-attempts-details.component';

describe('InstructorQuizAttemptsDetailsComponent', () => {
  let component: InstructorQuizAttemptsDetailsComponent;
  let fixture: ComponentFixture<InstructorQuizAttemptsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorQuizAttemptsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorQuizAttemptsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
