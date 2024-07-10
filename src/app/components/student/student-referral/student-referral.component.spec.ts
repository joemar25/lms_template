import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReferralComponent } from './student-referral.component';

describe('StudentReferralComponent', () => {
  let component: StudentReferralComponent;
  let fixture: ComponentFixture<StudentReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentReferralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
