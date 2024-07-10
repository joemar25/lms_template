import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-qa',
  templateUrl: './student-qa.component.html',
  styleUrl: './student-qa.component.scss'
})
export class StudentQaComponent {
  public routes = routes;
}
