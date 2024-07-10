import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-change-password',
  templateUrl: './instructor-change-password.component.html',
  styleUrl: './instructor-change-password.component.scss'
})
export class InstructorChangePasswordComponent {
  public routes = routes

}
