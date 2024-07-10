import { Component, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { SidebarService } from 'src/app/shared/service/sidebar/sidebar.service';
@Component({
  selector: 'app-instructor-chat',
  templateUrl: './instructor-chat.component.html',
  styleUrls: ['./instructor-chat.component.scss']
})
export class InstructorChatComponent  {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  constructor(
    
    private sidebar: SidebarService,
    private common: CommonService,
    private renderer: Renderer2
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
    if (this.page == 'instructor-chat') {
      this.renderer.addClass(document.body, 'main-chat-blk');
    this.renderer.addClass(document.body, 'chat-page');
    }
    
  }
  public onlineList: OwlOptions = {
    margin: 0,
    nav: false,
    loop: false,
    dots: false,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 5,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 5,
      },
    },
  };
  search2 = false;
  search = false;
  showSearch2() {
    this.search2 = true;
  }
  hideSearch2() {
    this.search2 = false;
  }
  showSearch() {
    this.search = true;
  }
  hideSearch() {
    this.search = false;
  }
  mobChat = false;
  
  mobChatOpen() {
    const isResponsive = window.matchMedia('(max-width: 992px)').matches;
    if (isResponsive) {
      this.mobChat = true;
      
    }
  }
  mobChatClose() {
    const isResponsive = window.matchMedia('(max-width: 992px)').matches;
    if (isResponsive) {
      this.mobChat = false;
      
    }
  }
}
