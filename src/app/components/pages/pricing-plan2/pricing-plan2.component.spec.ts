import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlan2Component } from './pricing-plan2.component';

describe('PricingPlan2Component', () => {
  let component: PricingPlan2Component;
  let fixture: ComponentFixture<PricingPlan2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPlan2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
