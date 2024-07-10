import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSocialProfileComponent } from './student-social-profile.component';

describe('StudentSocialProfileComponent', () => {
  let component: StudentSocialProfileComponent;
  let fixture: ComponentFixture<StudentSocialProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSocialProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSocialProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
