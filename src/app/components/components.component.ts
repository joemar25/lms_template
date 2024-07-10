import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { CommonService } from '../shared/service/common/common.service';
import { SidebarService } from '../shared/service/sidebar/sidebar.service';
import { url } from '../shared/models/model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  showMiniSidebar = false;
  base = '';
  page = '';
  last = '';
  public isUserHeader!: boolean;
  public isAdminHeader!: boolean;
  public isStudentHeader!: boolean;
  public mainFooter!: boolean;
  public routeStatus!: string;
  public routeStatusSub!: string;
  constructor(
    private Router: Router,
    private sidebar: SidebarService,
    private common: CommonService
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });

    this.Router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.setRouting(data);
      }
    });

    this.setRouting(this.Router);

    this.common.isAdminHeader.subscribe((res: boolean) => {
      this.isAdminHeader = res;
    });
    this.common.isUserHeader.subscribe((res: boolean) => {
      this.isUserHeader = res;
    });
    this.common.isStudentHeader.subscribe((res: boolean) => {
      this.isStudentHeader = res;
    });
    this.common.mainFooter.subscribe((res: boolean) => {
      this.mainFooter = res;
    });
    this.sidebar.toggleSidebar.subscribe((res: string) => {
      if (res == 'true') {
        this.showMiniSidebar = true;
      } else {
        this.showMiniSidebar = false;
      }
    });
  }

  private setRouting(data: url): void {
    this.routeStatus = data.url.split('/')[1];
    this.routeStatusSub = data.url.split('/')[2];

    this.common.base.next(data.url.split('/')[1]);
    this.common.page.next(data.url.split('/')[2]);
    this.common.last.next(data.url.split('/')[3]);

    if (
      this.routeStatus == 'home-two' ||
      this.routeStatus == 'home-three' ||
      this.routeStatus == 'home-four'
    ) {
      this.common.isUserHeader.next(false);
      this.common.isStudentHeader.next(false);
      this.common.isAdminHeader.next(false);
      this.common.mainFooter.next(false);
    } else {
      this.common.mainFooter.next(true);
    }
    if (
      this.routeStatus == 'home' ||
      this.routeStatus == 'pages' ||
      this.routeStatus == 'blog'
    ) {
      this.common.isUserHeader.next(true);
      this.common.isStudentHeader.next(false);
      this.common.isAdminHeader.next(false);
    }
    if (
      this.routeStatus == 'student' ||
      (this.routeStatus == 'pages' &&
        (this.routeStatusSub == 'course' ||
          this.routeStatusSub === 'cart' ||
          this.routeStatusSub === 'checkout' ||
          this.routeStatusSub === 'purchase-history'))
    ) {
      this.common.isUserHeader.next(false);
      this.common.isStudentHeader.next(true);
      this.common.isAdminHeader.next(false);
    }
    if (this.routeStatus == 'instructor') {
      this.common.isUserHeader.next(false);
      this.common.isStudentHeader.next(false);
      this.common.isAdminHeader.next(true);
    }
  }
}
