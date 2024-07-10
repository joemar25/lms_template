import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuingComponent } from './queuing.component';

describe('QueuingComponent', () => {
  let component: QueuingComponent;
  let fixture: ComponentFixture<QueuingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueuingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueuingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
