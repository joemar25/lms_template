import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSettingWithdrawComponent } from './instructor-setting-withdraw.component';

describe('InstructorSettingWithdrawComponent', () => {
  let component: InstructorSettingWithdrawComponent;
  let fixture: ComponentFixture<InstructorSettingWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSettingWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorSettingWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
