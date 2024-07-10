import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-tickets',
  templateUrl: './instructor-tickets.component.html',
  styleUrls: ['./instructor-tickets.component.scss'],
})
export class InstructorTicketsComponent {
  public routes = routes;
  text: string | undefined;
}
