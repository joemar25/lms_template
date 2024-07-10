import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorReviewsComponent } from './instructor-reviews.component';

describe('InstructorReviewsComponent', () => {
  let component: InstructorReviewsComponent;
  let fixture: ComponentFixture<InstructorReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
