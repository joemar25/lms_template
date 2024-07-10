import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-quiz',
  
  templateUrl: './instructor-quiz.component.html',
  styleUrl: './instructor-quiz.component.scss'
})
export class InstructorQuizComponent {
  public routes = routes;
}
