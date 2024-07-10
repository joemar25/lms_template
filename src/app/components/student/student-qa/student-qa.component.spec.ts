import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQaComponent } from './student-qa.component';

describe('StudentQaComponent', () => {
  let component: StudentQaComponent;
  let fixture: ComponentFixture<StudentQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentQaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
