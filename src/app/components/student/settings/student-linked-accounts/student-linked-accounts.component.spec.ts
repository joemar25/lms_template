import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLinkedAccountsComponent } from './student-linked-accounts.component';

describe('StudentLinkedAccountsComponent', () => {
  let component: StudentLinkedAccountsComponent;
  let fixture: ComponentFixture<StudentLinkedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLinkedAccountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentLinkedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
