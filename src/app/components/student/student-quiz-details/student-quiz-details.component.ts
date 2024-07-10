import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-quiz-details',
  templateUrl: './student-quiz-details.component.html',
  styleUrl: './student-quiz-details.component.scss'
})
export class StudentQuizDetailsComponent {
  public routes = routes

}
