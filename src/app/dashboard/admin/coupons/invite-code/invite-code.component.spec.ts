import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCodeComponent } from './invite-code.component';

describe('InviteCodeComponent', () => {
  let component: InviteCodeComponent;
  let fixture: ComponentFixture<InviteCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InviteCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
