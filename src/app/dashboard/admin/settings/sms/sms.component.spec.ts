import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsComponent } from './sms.component';

describe('SmsComponent', () => {
  let component: SmsComponent;
  let fixture: ComponentFixture<SmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
