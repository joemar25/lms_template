
import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from '@supabase/supabase-js';
import { GuestUser } from 'src/app/shared/models/model';

@Component({
  selector: 'our-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class OurHeaderComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;

  @Output() search = new EventEmitter<string>();

  constructor(
    private supabaseService: SupabaseService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
        console.log('Current user:', this.user);
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  getUserType(): string | null {
    return this.userService.getUserType();
  }

  searchRoutes() {
    this.search.emit(this.searchQuery);
  }

  isFocused: boolean = false;

  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }

  onInput(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }
}
