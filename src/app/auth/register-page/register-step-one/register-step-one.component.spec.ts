import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepOneComponent } from './register-step-one.component';

describe('RegisterStepOneComponent', () => {
  let component: RegisterStepOneComponent;
  let fixture: ComponentFixture<RegisterStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterStepOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
