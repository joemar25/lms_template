import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettingsComponent } from './menu-settings.component';

describe('MenuSettingsComponent', () => {
  let component: MenuSettingsComponent;
  let fixture: ComponentFixture<MenuSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
