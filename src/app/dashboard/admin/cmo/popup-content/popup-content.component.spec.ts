import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupContentComponent } from './popup-content.component';

describe('PopupContentComponent', () => {
  let component: PopupContentComponent;
  let fixture: ComponentFixture<PopupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
