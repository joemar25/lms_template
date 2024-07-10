import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-enrolled-course',
  
  templateUrl: './instructor-enrolled-course.component.html',
  styleUrl: './instructor-enrolled-course.component.scss'
})
export class InstructorEnrolledCourseComponent {
  public routes = routes;
  public isClassAdded: boolean[] = [false];

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
