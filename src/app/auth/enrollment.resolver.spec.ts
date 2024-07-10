import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { enrollmentResolver } from './enrollment.resolver';

describe('enrollmentResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => enrollmentResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
