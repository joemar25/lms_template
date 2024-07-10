import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneComponent } from './timezone.component';

describe('TimezoneComponent', () => {
  let component: TimezoneComponent;
  let fixture: ComponentFixture<TimezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimezoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
