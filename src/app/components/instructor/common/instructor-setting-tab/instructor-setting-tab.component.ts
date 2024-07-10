import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-setting-tab',
  templateUrl: './instructor-setting-tab.component.html',
  styleUrl: './instructor-setting-tab.component.scss'
})
export class InstructorSettingTabComponent {
  public routes = routes;
}
