import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { CourseDataService } from 'src/app/shared/service/course-data/course-data.service';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  course: any;

  constructor(private router: Router, private courseDataService: CourseDataService) {} // Inject the service

  ngOnInit() {
    this.course = this.courseDataService.getCourse(); // Retrieve the course data
    if (this.course) {
      console.log('Course data received in course-details:', this.course);  // Debugging line
    } else {
      console.log('No course data found in course-details');
    }
  }

  goBack() {
    this.router.navigate([routes.courses]);
  }
}
