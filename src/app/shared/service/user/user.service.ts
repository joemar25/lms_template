// src/app/shared/service/user/user.service.ts
import { Injectable } from '@angular/core';
import { SupabaseService } from '../api-supabase/supabase.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from '../../models/model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = new BehaviorSubject<User | GuestUser | null>(null);
  public currentUser = this.user.asObservable();

  constructor(private supabaseService: SupabaseService) {
    this.supabaseService.currentUser.subscribe((user) => {
      this.user.next(user);
    });
  }

  isGuestUser(user: User | GuestUser | null): user is GuestUser {
    return user !== null && 'user_type' in user;
  }

  getUserType(): string | null {
    const user = this.user.value;
    if (this.isGuestUser(user)) {
      return user.user_type;
    }
    return user?.email || null;
  }
}
