import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-setting-withdraw',
  templateUrl: './instructor-setting-withdraw.component.html',
  styleUrl: './instructor-setting-withdraw.component.scss'
})
export class InstructorSettingWithdrawComponent {
  public routes = routes;
}
