import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-quiz-attempts-details',
  
  templateUrl: './instructor-quiz-attempts-details.component.html',
  styleUrl: './instructor-quiz-attempts-details.component.scss'
})
export class InstructorQuizAttemptsDetailsComponent {
  public routes = routes;
  text: string | undefined;

}
