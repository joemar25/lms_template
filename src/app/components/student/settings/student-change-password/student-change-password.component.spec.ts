import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChangePasswordComponent } from './student-change-password.component';

describe('StudentChangePasswordComponent', () => {
  let component: StudentChangePasswordComponent;
  let fixture: ComponentFixture<StudentChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentChangePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
