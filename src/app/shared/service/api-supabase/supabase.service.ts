import { Injectable } from '@angular/core';
import {
  createClient,
  SupabaseClient,
  User,
  AuthChangeEvent,
  Session,
  AuthError,
} from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { GuestUser } from 'src/app/shared/models/model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private userSubject: BehaviorSubject<User | GuestUser | null> =
    new BehaviorSubject<User | GuestUser | null>(null);

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
    this.initializeUser();
  }

  private async initializeUser() {
    const existingSession = localStorage.getItem('supabase.auth.token');
    if (existingSession) {
      const {
        data: { user },
      } = await this.supabase.auth.getUser();
      this.userSubject.next(user);
    } else {
      const guestUser = localStorage.getItem('guestUser');
      if (guestUser) {
        this.userSubject.next(JSON.parse(guestUser));
      }
    }

    this.supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          this.userSubject.next(session?.user || null);
          localStorage.setItem(
            'supabase.auth.token',
            session?.access_token || ''
          );
        } else if (event === 'SIGNED_OUT') {
          this.userSubject.next(null);
          localStorage.removeItem('supabase.auth.token');
          localStorage.removeItem('guestUser');
        }
      }
    );
  }

  get currentUser(): Observable<User | GuestUser | null> {
    return this.userSubject.asObservable();
  }

  async signIn(email: string, password: string): Promise<User | null> {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) this.handleError(error);
    return data.user;
  }

  async signUp(email: string, password: string): Promise<User | null> {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) this.handleError(error);
    return data.user;
  }

  async signOut(): Promise<void> {
    const { error } = await this.supabase.auth.signOut();
    if (error) this.handleError(error);
    localStorage.removeItem('guestUser');
    this.userSubject.next(null);
  }

  setGuestUser(guestUser: GuestUser | null) {
    if (guestUser) {
      localStorage.setItem('guestUser', JSON.stringify(guestUser));
      this.userSubject.next(guestUser);
    } else {
      localStorage.removeItem('guestUser');
      this.userSubject.next(null);
    }
  }

  private handleError(error: AuthError): void {
    console.error('Supabase error:', error);
    throw new Error(error.message || 'An unknown error occurred');
  }

  get client() {
    return this.supabase;
  }
}
