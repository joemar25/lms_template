import { Component} from '@angular/core';
import { instructorEdit, instructorEditEducation, instructorEditExperience, instructorEditCourses, instructorEditReviews, instructorEditOverview, instructorEditContactDetails } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
interface data {
  active?: boolean;
}
@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent  {
  public routes = routes;
  public instructorEdit : instructorEdit[] = [];
  public instructorEditEducation : instructorEditEducation[] = [];
  public instructorEditExperience : instructorEditExperience[] = [];
  public instructorEditCourses : instructorEditCourses[] = [];
  public instructorEditReviews : instructorEditReviews[] = [];
  public instructorEditOverview : instructorEditOverview[] = [];
  public instructorEditContactDetails : instructorEditContactDetails[] = [];

  constructor(private DataService: DataService) {
    this.instructorEdit = this.DataService.instructorEdit;
    this.instructorEditEducation = this.DataService.instructorEditEducation;
    this.instructorEditExperience = this.DataService.instructorEditExperience;
    this.instructorEditCourses = this.DataService.instructorEditCourses;
    this.instructorEditReviews = this.DataService.instructorEditReviews;
    this.instructorEditOverview = this.DataService.instructorEditOverview;
    this.instructorEditContactDetails = this.DataService.instructorEditContactDetails;
    }


  toggleClass(data: data) { 
    data.active = !data.active;
  }
}
