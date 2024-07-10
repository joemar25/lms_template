import { Component } from '@angular/core';
import { instructorReviews } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-reviews',
  templateUrl: './instructor-reviews.component.html',
  styleUrls: ['./instructor-reviews.component.scss']
})
export class InstructorReviewsComponent  {
  public routes = routes;
  public instructorReviews: instructorReviews[] = [];
  selected='1';
  selected2='1';
  selected3='1';
  constructor(private DataService: DataService) {
    this.instructorReviews = this.DataService.instructorReviews;
  }


}
