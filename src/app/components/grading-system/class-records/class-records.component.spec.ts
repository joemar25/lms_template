import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRecordsComponent } from './class-records.component';

describe('ClassRecordsComponent', () => {
  let component: ClassRecordsComponent;
  let fixture: ComponentFixture<ClassRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassRecordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
