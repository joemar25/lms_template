import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterStyleComponent } from './header-footer-style.component';

describe('HeaderFooterStyleComponent', () => {
  let component: HeaderFooterStyleComponent;
  let fixture: ComponentFixture<HeaderFooterStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFooterStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderFooterStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
