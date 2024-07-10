import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMessageComponent } from './student-message.component';

describe('StudentMessageComponent', () => {
  let component: StudentMessageComponent;
  let fixture: ComponentFixture<StudentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
