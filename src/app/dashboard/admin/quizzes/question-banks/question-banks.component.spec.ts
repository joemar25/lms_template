import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBanksComponent } from './question-banks.component';

describe('QuestionBanksComponent', () => {
  let component: QuestionBanksComponent;
  let fixture: ComponentFixture<QuestionBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionBanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
