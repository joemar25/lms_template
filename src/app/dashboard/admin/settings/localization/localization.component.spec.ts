import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizationComponent } from './localization.component';

describe('LocalizationComponent', () => {
  let component: LocalizationComponent;
  let fixture: ComponentFixture<LocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
