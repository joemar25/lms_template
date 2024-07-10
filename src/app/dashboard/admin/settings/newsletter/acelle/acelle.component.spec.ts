import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcelleComponent } from './acelle.component';

describe('AcelleComponent', () => {
  let component: AcelleComponent;
  let fixture: ComponentFixture<AcelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcelleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AcelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
