import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-qa',
  
  templateUrl: './instructor-qa.component.html',
  styleUrl: './instructor-qa.component.scss'
})
export class InstructorQaComponent {
  public routes = routes;
}
