import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-setting-tab',
  templateUrl: './student-setting-tab.component.html',
  styleUrl: './student-setting-tab.component.scss'
})
export class StudentSettingTabComponent {
  public routes = routes;
}
