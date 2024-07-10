import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepFiveComponent } from './register-step-five.component';

describe('RegisterStepFiveComponent', () => {
  let component: RegisterStepFiveComponent;
  let fixture: ComponentFixture<RegisterStepFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterStepFiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
