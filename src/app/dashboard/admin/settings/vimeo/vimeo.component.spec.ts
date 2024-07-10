import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VimeoComponent } from './vimeo.component';

describe('VimeoComponent', () => {
  let component: VimeoComponent;
  let fixture: ComponentFixture<VimeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VimeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VimeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
