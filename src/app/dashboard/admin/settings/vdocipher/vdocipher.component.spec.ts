import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdocipherComponent } from './vdocipher.component';

describe('VdocipherComponent', () => {
  let component: VdocipherComponent;
  let fixture: ComponentFixture<VdocipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VdocipherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VdocipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
