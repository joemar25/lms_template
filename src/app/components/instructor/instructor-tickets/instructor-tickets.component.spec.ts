import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorTicketsComponent } from './instructor-tickets.component';

describe('InstructorTicketsComponent', () => {
  let component: InstructorTicketsComponent;
  let fixture: ComponentFixture<InstructorTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
