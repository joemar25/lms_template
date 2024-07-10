import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWishlistComponent } from './course-wishlist.component';

describe('CourseWishlistComponent', () => {
  let component: CourseWishlistComponent;
  let fixture: ComponentFixture<CourseWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
