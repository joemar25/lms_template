import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomSettingsComponent } from './zoom-settings.component';

describe('ZoomSettingsComponent', () => {
  let component: ZoomSettingsComponent;
  let fixture: ComponentFixture<ZoomSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoomSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZoomSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
