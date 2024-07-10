import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorNotificationComponent } from './instructor-notification.component';

describe('InstructorNotificationComponent', () => {
  let component: InstructorNotificationComponent;
  let fixture: ComponentFixture<InstructorNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
