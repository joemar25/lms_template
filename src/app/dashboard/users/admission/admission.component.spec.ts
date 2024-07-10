import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionComponent } from './admission.component';

describe('AdmissionComponent', () => {
  let component: AdmissionComponent;
  let fixture: ComponentFixture<AdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
