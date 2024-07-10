import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHeaderComponent } from './header.component';

describe('OurHeaderComponent', () => {
  let component: OurHeaderComponent;
  let fixture: ComponentFixture<OurHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
