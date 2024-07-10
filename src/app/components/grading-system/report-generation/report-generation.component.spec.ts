import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGenerationComponent } from './report-generation.component';

describe('ReportGenerationComponent', () => {
  let component: ReportGenerationComponent;
  let fixture: ComponentFixture<ReportGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportGenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
