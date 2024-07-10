import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersComponent } from './sliders.component';

describe('SlidersComponent', () => {
  let component: SlidersComponent;
  let fixture: ComponentFixture<SlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
