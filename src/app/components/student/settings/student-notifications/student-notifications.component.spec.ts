import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotificationsComponent } from './student-notifications.component';

describe('StudentNotificationsComponent', () => {
  let component: StudentNotificationsComponent;
  let fixture: ComponentFixture<StudentNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
