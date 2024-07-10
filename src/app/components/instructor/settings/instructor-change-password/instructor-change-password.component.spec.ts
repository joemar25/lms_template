import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorChangePasswordComponent } from './instructor-change-password.component';

describe('InstructorChangePasswordComponent', () => {
  let component: InstructorChangePasswordComponent;
  let fixture: ComponentFixture<InstructorChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorChangePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
