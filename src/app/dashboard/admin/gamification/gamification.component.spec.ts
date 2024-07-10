import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamificationComponent } from './gamification.component';

describe('GamificationComponent', () => {
  let component: GamificationComponent;
  let fixture: ComponentFixture<GamificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
