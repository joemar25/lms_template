import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-quiz-details',
  templateUrl: './instructor-quiz-details.component.html',
  styleUrl: './instructor-quiz-details.component.scss'
})
export class InstructorQuizDetailsComponent {
  public routes = routes

}
