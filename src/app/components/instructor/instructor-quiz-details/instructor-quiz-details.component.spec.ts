import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorQuizDetailsComponent } from './instructor-quiz-details.component';

describe('InstructorQuizDetailsComponent', () => {
  let component: InstructorQuizDetailsComponent;
  let fixture: ComponentFixture<InstructorQuizDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorQuizDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorQuizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
