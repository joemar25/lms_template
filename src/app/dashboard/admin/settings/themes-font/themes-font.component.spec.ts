import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesFontComponent } from './themes-font.component';

describe('ThemesFontComponent', () => {
  let component: ThemesFontComponent;
  let fixture: ComponentFixture<ThemesFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesFontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemesFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
