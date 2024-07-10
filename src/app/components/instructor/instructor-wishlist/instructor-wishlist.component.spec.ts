import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorWishlistComponent } from './instructor-wishlist.component';

describe('InstructorWishlistComponent', () => {
  let component: InstructorWishlistComponent;
  let fixture: ComponentFixture<InstructorWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
