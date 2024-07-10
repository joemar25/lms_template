import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrl: './student-change-password.component.scss'
})
export class StudentChangePasswordComponent {
  public routes = routes;
}
