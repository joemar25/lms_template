import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-footer-top-container',
  templateUrl: './footer-top-container.component.html',
  styleUrls: ['./footer-top-container.component.scss']
})
export class FooterTopContainerComponent  {
  public routes = routes;


}
