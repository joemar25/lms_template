import { ResolveFn } from '@angular/router';

export const enrollmentResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
