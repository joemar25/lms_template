// src/app/shared/guards/auth.guard.ts

import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SupabaseService } from '../api-supabase/supabase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.supabaseService.currentUser.pipe(
      take(1),
      map((user) => {
        const isAuthRoute = state.url.startsWith('/auth');

        if (user) {
          // User is authenticated
          if (isAuthRoute) {
            // Redirect to dashboard if trying to access auth routes
            console.log(
              'Authenticated user trying to access auth route. Redirecting to dashboard.'
            );
            return this.router.createUrlTree(['/dashboard']);
          }
          // Allow access to other routes
          return true;
        } else {
          // User is not authenticated
          if (!isAuthRoute && state.url !== '/') {
            // Redirect to login if trying to access protected routes
            console.log(
              'Unauthenticated user trying to access protected route. Redirecting to login.'
            );
            return this.router.createUrlTree(['/auth/login']);
          }
          // Allow access to auth routes and home page
          return true;
        }
      })
    );
  }
}
