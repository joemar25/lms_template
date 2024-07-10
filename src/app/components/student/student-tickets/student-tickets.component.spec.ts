import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTicketsComponent } from './student-tickets.component';

describe('StudentTicketsComponent', () => {
  let component: StudentTicketsComponent;
  let fixture: ComponentFixture<StudentTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTicketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
