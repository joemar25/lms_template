import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrderHistoryComponent } from './student-order-history.component';

describe('StudentOrderHistoryComponent', () => {
  let component: StudentOrderHistoryComponent;
  let fixture: ComponentFixture<StudentOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentOrderHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
