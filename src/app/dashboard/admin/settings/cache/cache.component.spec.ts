import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheComponent } from './cache.component';

describe('CacheComponent', () => {
  let component: CacheComponent;
  let fixture: ComponentFixture<CacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CacheComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
