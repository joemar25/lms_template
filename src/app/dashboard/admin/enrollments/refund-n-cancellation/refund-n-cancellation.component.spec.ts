import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundNCancellationComponent } from './refund-n-cancellation.component';

describe('RefundNCancellationComponent', () => {
  let component: RefundNCancellationComponent;
  let fixture: ComponentFixture<RefundNCancellationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefundNCancellationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefundNCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
