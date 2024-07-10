import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public base = '';
  public routes = routes;
  constructor(private common: CommonService) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
  }
  ngOnInit(): void {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }
}
