import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditComponent } from './instructor-edit.component';

describe('InstructorEditComponent', () => {
  let component: InstructorEditComponent;
  let fixture: ComponentFixture<InstructorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
