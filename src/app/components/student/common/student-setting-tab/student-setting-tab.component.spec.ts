import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSettingTabComponent } from './student-setting-tab.component';

describe('StudentSettingTabComponent', () => {
  let component: StudentSettingTabComponent;
  let fixture: ComponentFixture<StudentSettingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentSettingTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentSettingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
