import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorReferralComponent } from './instructor-referral.component';

describe('InstructorReferralComponent', () => {
  let component: InstructorReferralComponent;
  let fixture: ComponentFixture<InstructorReferralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorReferralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
