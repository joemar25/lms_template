import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorOrdersComponent } from './instructor-orders.component';

describe('InstructorOrdersComponent', () => {
  let component: InstructorOrdersComponent;
  let fixture: ComponentFixture<InstructorOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
