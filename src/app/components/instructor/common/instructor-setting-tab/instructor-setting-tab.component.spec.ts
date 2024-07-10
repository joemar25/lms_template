import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSettingTabComponent } from './instructor-setting-tab.component';

describe('InstructorSettingTabComponent', () => {
  let component: InstructorSettingTabComponent;
  let fixture: ComponentFixture<InstructorSettingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSettingTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorSettingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
