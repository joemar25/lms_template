import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsComponent } from './instructors.component';

describe('InstructorsComponent', () => {
  let component: InstructorsComponent;
  let fixture: ComponentFixture<InstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
