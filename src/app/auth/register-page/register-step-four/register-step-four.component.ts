import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { registerFour } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-register-step-four',
  templateUrl: './register-step-four.component.html',
  styleUrls: ['./register-step-four.component.scss'],
})
export class RegisterStepFourComponent {
  public registerFour: registerFour[] = [];
  public routes = routes;

  public registerFourOwlOptions: OwlOptions = {
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

  constructor(private DataService: DataService) {
    this.registerFour = this.DataService.registerFour;
  }
}
