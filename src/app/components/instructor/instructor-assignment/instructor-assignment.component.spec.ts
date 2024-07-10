import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAssignmentComponent } from './instructor-assignment.component';

describe('InstructorAssignmentComponent', () => {
  let component: InstructorAssignmentComponent;
  let fixture: ComponentFixture<InstructorAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
