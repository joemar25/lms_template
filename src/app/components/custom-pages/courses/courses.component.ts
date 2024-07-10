import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from 'src/app/shared/service/routes/routes'; 
import { CourseDataService } from 'src/app/shared/service/course-data/course-data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CoursesComponent implements OnInit {
  courses: any[] = [
    { course: 'Mathematics 101', subject: 'Algebra', block: 'A', time: '09:00 - 10:00' },
    { course: 'Physics 201', subject: 'Mechanics', block: 'B', time: '10:00 - 11:00' },
    { course: 'Chemistry 301', subject: 'Organic Chemistry', block: 'C', time: '11:00 - 12:00' },
    { course: 'Biology 101', subject: 'Botany', block: 'D', time: '12:00 - 13:00' },
    { course: 'Computer Science 101', subject: 'Programming', block: 'E', time: '13:00 - 14:00' },
    { course: 'History 101', subject: 'World History', block: 'F', time: '14:00 - 15:00' },
    { course: 'Geography 101', subject: 'Physical Geography', block: 'G', time: '15:00 - 16:00' },
    { course: 'Literature 101', subject: 'English Literature', block: 'H', time: '16:00 - 17:00' },
  ];

  constructor(private router: Router, private courseDataService: CourseDataService) {} // Inject the service

  ngOnInit() {}

  goToCourseDetails(course: any) {
    console.log('Navigating to course details with data:', course);  // Debugging line
    this.courseDataService.setCourse(course); // Store the course data
    this.router.navigate([routes.course_details]);
  }
}
