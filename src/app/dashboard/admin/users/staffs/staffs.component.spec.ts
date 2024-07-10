import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsComponent } from './staffs.component';

describe('StaffsComponent', () => {
  let component: StaffsComponent;
  let fixture: ComponentFixture<StaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
