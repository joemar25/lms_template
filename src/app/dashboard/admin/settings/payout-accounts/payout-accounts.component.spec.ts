import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutAccountsComponent } from './payout-accounts.component';

describe('PayoutAccountsComponent', () => {
  let component: PayoutAccountsComponent;
  let fixture: ComponentFixture<PayoutAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayoutAccountsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PayoutAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
