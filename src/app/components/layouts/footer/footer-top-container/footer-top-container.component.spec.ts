import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTopContainerComponent } from './footer-top-container.component';

describe('FooterTopContainerComponent', () => {
  let component: FooterTopContainerComponent;
  let fixture: ComponentFixture<FooterTopContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTopContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
