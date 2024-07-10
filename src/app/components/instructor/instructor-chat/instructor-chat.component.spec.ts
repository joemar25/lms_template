import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorChatComponent } from './instructor-chat.component';

describe('InstructorChatComponent', () => {
  let component: InstructorChatComponent;
  let fixture: ComponentFixture<InstructorChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
