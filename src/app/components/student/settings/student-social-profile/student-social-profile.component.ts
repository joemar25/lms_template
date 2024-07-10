import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-social-profile',
  templateUrl: './student-social-profile.component.html',
  styleUrl: './student-social-profile.component.scss'
})
export class StudentSocialProfileComponent {
  public routes = routes;
}
