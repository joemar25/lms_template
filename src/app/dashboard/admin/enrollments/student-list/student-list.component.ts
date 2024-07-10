import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from '../../../../shared/service/api-supabase/supabase.service';
import { Enrollment } from 'src/app/shared/models/model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  courseId: string | null = null;
  students: Enrollment[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('courseId');
      if (this.courseId) {
        this.fetchStudents();
      } else {
        this.error = 'No course ID provided';
        this.loading = false;
      }
    });
  }

  async fetchStudents() {
    try {
      if (!this.courseId) throw new Error('No course ID provided');

      const { data, error } = await this.supabaseService.client
        .from('enrollment_tb')
        .select('*')
        .eq('course', this.courseId)
        .returns<Enrollment[]>();

      if (error) throw error;
      this.students = data;
    } catch (error: any) {
      this.error = error.message || 'An unknown error occurred';
    } finally {
      this.loading = false;
    }
  }
}