import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAnnouncementsComponent } from './instructor-announcements.component';

describe('InstructorAnnouncementsComponent', () => {
  let component: InstructorAnnouncementsComponent;
  let fixture: ComponentFixture<InstructorAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorAnnouncementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
