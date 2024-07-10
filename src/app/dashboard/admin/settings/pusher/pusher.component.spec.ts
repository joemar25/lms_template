import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PusherComponent } from './pusher.component';

describe('PusherComponent', () => {
  let component: PusherComponent;
  let fixture: ComponentFixture<PusherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PusherComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(PusherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
