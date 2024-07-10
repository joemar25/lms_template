import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { forgotPassword } from 'src/app/shared/models/model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  public routes = routes;

  public forgotPassword: forgotPassword[] = [];

  public forgotPasswordOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  constructor(private DataService: DataService, public router: Router) {
    this.forgotPassword = this.DataService.forgotPassword;
  }

  ngOnInit() {
    Aos.init();
  }
  directLogin() {
    this.router.navigate(['/auth/login']);
  }
}
