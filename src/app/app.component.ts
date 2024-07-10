// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonService } from './shared/service/common/common.service';
import { url } from './shared/models/model';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { SupabaseService } from './shared/service/api-supabase/supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'quanby-lms';
  public base = '';
  public page = '';
  public last = '';

  constructor(
    private common: CommonService,
    private router: Router,
    private supabaseService: SupabaseService
  ) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });

    this.common.page.subscribe((page: string) => {
      this.page = page;
    });

    this.common.last.subscribe((last: string) => {
      this.last = last;
    });

    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationEnd) {
        this.getRoutes(this.router);
      }
    });
    this.getRoutes(this.router);
  }

  ngOnInit() {
    const guestUserJson = localStorage.getItem('guestUser');
    if (guestUserJson) {
      const guestUser = JSON.parse(guestUserJson);
      console.log('Found guest user in local storage:', guestUser);
      this.supabaseService.setGuestUser(guestUser);
    }
  }

  private getRoutes(data: url): void {
    const splitVal = data.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
  }
}
