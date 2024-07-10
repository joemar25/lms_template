import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSettingsComponent } from './refund-settings.component';

describe('RefundSettingsComponent', () => {
  let component: RefundSettingsComponent;
  let fixture: ComponentFixture<RefundSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefundSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
