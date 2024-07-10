import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-delete-account',
  templateUrl: './instructor-delete-account.component.html',
  styleUrl: './instructor-delete-account.component.scss'
})
export class InstructorDeleteAccountComponent {
  public routes = routes;

}
