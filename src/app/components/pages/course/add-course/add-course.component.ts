import { Component, ViewEncapsulation } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent {
  public routes = routes;
  selected = '1';
  selected2 = '1';
  public activeIndex = 0;
  text: string | undefined;

  public onSubmit(index: number) {
    this.activeIndex = index;
  }

  public onBack(index: number) {
    this.activeIndex = index;
  }
}
