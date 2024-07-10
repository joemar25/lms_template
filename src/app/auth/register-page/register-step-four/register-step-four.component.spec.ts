import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepFourComponent } from './register-step-four.component';

describe('RegisterStepFourComponent', () => {
  let component: RegisterStepFourComponent;
  let fixture: ComponentFixture<RegisterStepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterStepFourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
