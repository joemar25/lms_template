import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSettingNotificationsComponent } from './instructor-setting-notifications.component';

describe('InstructorSettingNotificationsComponent', () => {
  let component: InstructorSettingNotificationsComponent;
  let fixture: ComponentFixture<InstructorSettingNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSettingNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorSettingNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
