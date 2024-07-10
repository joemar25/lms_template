import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSidebarComponent } from './sidebar.component';

describe('OurSidebarComponent', () => {
  let component: OurSidebarComponent;
  let fixture: ComponentFixture<OurSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
