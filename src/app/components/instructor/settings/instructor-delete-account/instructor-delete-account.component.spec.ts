import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDeleteAccountComponent } from './instructor-delete-account.component';

describe('InstructorDeleteAccountComponent', () => {
  let component: InstructorDeleteAccountComponent;
  let fixture: ComponentFixture<InstructorDeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorDeleteAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
