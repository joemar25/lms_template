import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeSoonComponent } from './come-soon.component';

describe('ComeSoonComponent', () => {
  let component: ComeSoonComponent;
  let fixture: ComponentFixture<ComeSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComeSoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComeSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
