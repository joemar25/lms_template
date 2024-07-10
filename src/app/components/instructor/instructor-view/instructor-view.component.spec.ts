import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorViewComponent } from './instructor-view.component';

describe('InstructorViewComponent', () => {
  let component: InstructorViewComponent;
  let fixture: ComponentFixture<InstructorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
