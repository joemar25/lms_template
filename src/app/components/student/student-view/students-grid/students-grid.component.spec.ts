import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGridComponent } from './students-grid.component';

describe('StudentsGridComponent', () => {
  let component: StudentsGridComponent;
  let fixture: ComponentFixture<StudentsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
