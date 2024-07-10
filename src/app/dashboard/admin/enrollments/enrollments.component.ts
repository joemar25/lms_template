import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../../shared/service/api-supabase/supabase.service';
import { Enrollment } from 'src/app/shared/models/model';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {
  courseEnrollments: { [course: string]: Enrollment[] } = {};

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.fetchEnrollments();
  }

  async fetchEnrollments() {
    try {
      const { data, error } = await this.supabaseService.client
        .from('enrollment_tb')
        .select('*')
        .returns<Enrollment[]>();

      if (error) {
        throw new Error(error.message);
      }

      this.groupEnrollmentsByCourse(data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  }

  groupEnrollmentsByCourse(enrollments: Enrollment[]) {
    this.courseEnrollments = enrollments.reduce((acc, enrollment) => {
      if (!acc[enrollment.course]) {
        acc[enrollment.course] = [];
      }
      acc[enrollment.course].push(enrollment);
      return acc;
    }, {} as { [course: string]: Enrollment[] });
  }
}