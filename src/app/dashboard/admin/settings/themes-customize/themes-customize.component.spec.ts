import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesCustomizeComponent } from './themes-customize.component';

describe('ThemesCustomizeComponent', () => {
  let component: ThemesCustomizeComponent;
  let fixture: ComponentFixture<ThemesCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesCustomizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemesCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
