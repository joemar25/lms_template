import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorQuizComponent } from './instructor-quiz.component';

describe('InstructorQuizComponent', () => {
  let component: InstructorQuizComponent;
  let fixture: ComponentFixture<InstructorQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
