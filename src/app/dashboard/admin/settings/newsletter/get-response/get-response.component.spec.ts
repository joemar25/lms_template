import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResponseComponent } from './get-response.component';

describe('GetResponseComponent', () => {
  let component: GetResponseComponent;
  let fixture: ComponentFixture<GetResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetResponseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
