import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-settings',
  templateUrl: './instructor-settings.component.html',
  styleUrl: './instructor-settings.component.scss'
})
export class InstructorSettingsComponent {
  public routes = routes;
}
