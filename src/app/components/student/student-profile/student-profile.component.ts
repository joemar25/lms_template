import { Component } from '@angular/core';
import { studentProfileEducation, studentProfileExperience, studentProfileCourses, studentProfileReviews, studentProfileContactDetails } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent  {
  public studentProfileEducation: studentProfileEducation[] = [];
  public studentProfileExperience: studentProfileExperience[] = [];
  public studentProfileCourses: studentProfileCourses [] = [];
  public studentProfileReviews: studentProfileReviews[] = [];
  public routes = routes;
  public studentProfileContactDetails: studentProfileContactDetails [] = [];

  constructor(private DataService: DataService) {
    this.studentProfileEducation = this.DataService.studentProfileEducation;
    this.studentProfileExperience = this.DataService.studentProfileExperience;
    this.studentProfileCourses = this.DataService.studentProfileCourses;
    this.studentProfileReviews = this.DataService.studentProfileReviews;
    this.studentProfileContactDetails = this.DataService.studentProfileContactDetails;
   }



}
