import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-settings',
  templateUrl: './student-settings.component.html',
  styleUrl: './student-settings.component.scss'
})
export class StudentSettingsComponent {
  public routes = routes;
}
