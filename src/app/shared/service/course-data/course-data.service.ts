import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {
  private course: any;

  setCourse(course: any) {
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}
