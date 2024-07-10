import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-notifications',
  templateUrl: './student-notifications.component.html',
  styleUrl: './student-notifications.component.scss'
})
export class StudentNotificationsComponent {
  public routes = routes;
}
