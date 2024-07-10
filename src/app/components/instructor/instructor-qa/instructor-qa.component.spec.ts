import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorQaComponent } from './instructor-qa.component';

describe('InstructorQaComponent', () => {
  let component: InstructorQaComponent;
  let fixture: ComponentFixture<InstructorQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorQaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
