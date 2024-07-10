import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStepThreeComponent } from './register-step-three.component';

describe('RegisterStepThreeComponent', () => {
  let component: RegisterStepThreeComponent;
  let fixture: ComponentFixture<RegisterStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterStepThreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
