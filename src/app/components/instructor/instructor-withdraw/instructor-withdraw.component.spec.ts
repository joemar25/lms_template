import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorWithdrawComponent } from './instructor-withdraw.component';

describe('InstructorWithdrawComponent', () => {
  let component: InstructorWithdrawComponent;
  let fixture: ComponentFixture<InstructorWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
