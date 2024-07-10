import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-course-details1',
  templateUrl: './course-details1.component.html',
  styleUrls: ['./course-details1.component.scss']
})
export class CourseDetails1Component  {
  public routes = routes;


}
