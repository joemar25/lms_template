import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteSettingsComponent } from './invite-settings.component';

describe('InviteSettingsComponent', () => {
  let component: InviteSettingsComponent;
  let fixture: ComponentFixture<InviteSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
