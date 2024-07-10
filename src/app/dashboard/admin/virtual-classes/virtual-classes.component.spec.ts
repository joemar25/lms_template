import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualClassesComponent } from './virtual-classes.component';

describe('VirtualClassesComponent', () => {
  let component: VirtualClassesComponent;
  let fixture: ComponentFixture<VirtualClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualClassesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
