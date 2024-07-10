import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-quiz-attempts',
  
  templateUrl: './instructor-quiz-attempts.component.html',
  styleUrl: './instructor-quiz-attempts.component.scss'
})
export class InstructorQuizAttemptsComponent {
  public routes = routes;
}
