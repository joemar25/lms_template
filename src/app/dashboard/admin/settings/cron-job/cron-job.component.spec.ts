import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronJobComponent } from './cron-job.component';

describe('CronJobComponent', () => {
  let component: CronJobComponent;
  let fixture: ComponentFixture<CronJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CronJobComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CronJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
