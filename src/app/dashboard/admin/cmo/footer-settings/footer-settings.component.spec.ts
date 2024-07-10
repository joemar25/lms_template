import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSettingsComponent } from './footer-settings.component';

describe('FooterSettingsComponent', () => {
  let component: FooterSettingsComponent;
  let fixture: ComponentFixture<FooterSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
