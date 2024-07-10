import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSettingsComponent } from './instructor-settings.component';

describe('InstructorSettingsComponent', () => {
  let component: InstructorSettingsComponent;
  let fixture: ComponentFixture<InstructorSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
