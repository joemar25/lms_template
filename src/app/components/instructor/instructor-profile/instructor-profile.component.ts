import { Component } from '@angular/core';
import { instructorProfile, instructorProfileEducation, instructorProfileExperience, instructorProfileCourses, instructorProfileReviews, instructorProfileOverview, instructorProfileContactDetails } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
interface data {
  active?:boolean;
}
@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.scss']
})
export class InstructorProfileComponent  {
  public routes = routes;
  public instructorProfile: instructorProfile[] = [];
  public instructorProfileEducation: instructorProfileEducation[] = [];
  public instructorProfileExperience: instructorProfileExperience[] = [];
  public instructorProfileCourses: instructorProfileCourses[] = [];
  public instructorProfileReviews: instructorProfileReviews[] = [];
  public instructorProfileOverview: instructorProfileOverview[] = [];
  public instructorProfileContactDetails: instructorProfileContactDetails[] = [];

   constructor(private DataService: DataService) {
    this.instructorProfile = this.DataService.instructorProfile;
    this.instructorProfileEducation = this.DataService.instructorProfileEducation;
    this.instructorProfileExperience = this.DataService.instructorProfileExperience;
    this.instructorProfileCourses = this.DataService.instructorProfileCourses;
    this.instructorProfileReviews = this.DataService.instructorProfileReviews;
    this.instructorProfileOverview = this.DataService.instructorProfileOverview;
    this.instructorProfileContactDetails = this.DataService.instructorProfileContactDetails;
   }


  toggleClass(data: data) {
    data.active = !data.active;
  }
}
