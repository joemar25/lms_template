import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSidebarComponent } from './student-sidebar.component';

describe('StudentSidebarComponent', () => {
  let component: StudentSidebarComponent;
  let fixture: ComponentFixture<StudentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
