import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { Subscription } from 'rxjs';
import { User } from '@supabase/supabase-js';
import { SupabaseService } from 'src/app/shared/service/api-supabase/supabase.service';
import { GuestUser } from 'src/app/shared/models/model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'our-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class OurSidebarComponent implements OnInit, OnDestroy, OnChanges {
  @Input() searchQuery: string = '';

  routes = routes;
  public isOpen: { [key: string]: boolean } = {
    media: false,
    users: false,
    settings: false,
    noMainRoute: false,
  };
  public user: User | GuestUser | null = null;
  private userSubscription: Subscription | undefined;

  public student_no = [
    { title: 'Dashboard', route: this.routes.dashboard },
    { title: 'Courses', route: this.routes.courses },
    { title: 'Tasks', route: this.routes.tasks },

    {
      title: 'Evaluation',
      subItems: [
        { title: 'Curriculum', route: this.routes.curriculum }, // wala 
        { title: 'Teacher', route: this.routes.teacher }, // wala 
      ]
    },
    {
      title: 'Student Information',
      subItems: [
        { title: 'Schedules', route: this.routes.schedules }, // wala 
        { title: 'Grades', route: this.routes.grades }, // wala
        { title: 'Clearance', route: this.routes.clearance } // wala

      ]
    },
   
    { title: 'Calendar', route: this.routes.calendar} // wala
  ];

  public instructor = [
    { title: 'Dashboard', route: this.routes.dashboard },
    { title: 'Courses', route: this.routes.courses }, 
    { title: 'Classes', route: this.routes.classes },
    { title: 'Tasks', route: this.routes.tasks },
    { title: 'Grades', route: this.routes.grades }, // wala
    { title: 'Class Absences Report', route: this.routes.absences }, // wala
    { title: 'Calendar', route: this.routes.calendar } // wala
  ];

  public school_admin = [
    {
      title: 'Grading System',
      isOpenKey: 'gradingSystem',
      subItems: [
        { title: 'Class Records', route: this.routes.class_records }, // wala 
        { title: 'Report Generation', route: this.routes.report_generation } // wala
      ]
    },
    {
      title: 'Student Information System',
      isOpenKey: 'studentInfoSystem',
      subItems: [
        { title: 'Admissions', route: this.routes.admission },
        { title: 'Enrollments', route: this.routes.enrollment },
        { title: 'Document Management', route: this.routes.document_management}, //wala
        { title: 'Assessments', route: this.routes.assessments}, // wala
        { title: 'Scholarships', route: this.routes.scholarships } // wala
      ]
    },
    {
      title: 'Clearance System',
      isOpenKey: 'clearanceSystem',
      subItems: [
        { title: 'Clearance Status', route: this.routes.clearance } ,// wala
        { title: 'Clearance Status', route: this.routes.clearance } // wala

      ]
    },
    {
      title: 'Attendance and Notifications',
      isOpenKey: 'attendanceNotifications',
      subItems: [
        { title: 'Attendance', route: this.routes.attendance }, // wala 
        { title: 'Notifications', route: this.routes.notification } // wala
      ]
    },
   
    {
      title: 'Information Kiosk and Queuing System',
      isOpenKey: 'informationKiosk',
      subItems: [
        { title: 'Kiosk', route: this.routes.kiosk }, // wala 
        { title: 'Queuing ', route: this.routes.queuing } // wala
      ]
    }
  ];

  public department_admin = [
    {
      title: 'Dashboard',
      route: this.routes.dashboard
    }, 
    {
      title: 'Faculty Management',
      route: this.routes.enrollment
    },  // wala
    {
      title: 'Course Scheduling',
      route: this.routes.enrollment
    },  // wala 
    {
      title: 'Departmental Reports and Analytics',
      route: this.routes.enrollment
    }, // wala
    {
      title: 'Curriculum Development and Evaluation',
      route: this.routes.enrollment
    }  // wala
  ];

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    const guestUserJson = sessionStorage.getItem('guestUser');
    if (guestUserJson) {
      const guestUser = JSON.parse(guestUserJson);
      this.supabaseService.setGuestUser(guestUser);
    }

    this.userSubscription = this.supabaseService.currentUser.subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery'] && this.searchQuery) {
      this.handleSearch();
    }
  }

  isGuestUser(user: User | GuestUser | null): user is GuestUser {
    return user !== null && 'user_type' in user;
  }

  getUserType(): string | null {
    if (this.isGuestUser(this.user)) {
      return this.user.user_type;
    }
    return this.user?.email || null;
  }

  toggleDropdown(section: string) {
    this.isOpen[section] = !this.isOpen[section];
  }

  handleSearch() {
    let userType = this.getUserType();
    let allItems: any[] = [];

    if (userType === 'student') {
      allItems = this.student_no.flatMap(item => item.subItems ? [item, ...item.subItems] : [item]);
    } else if (userType === 'instructor') {
      allItems = this.instructor;
    } else if (userType === 'school_admin') {
      allItems = this.school_admin.flatMap(group => [group, ...(group.subItems || [])]);
    } else if (userType === 'department_admin') {
      allItems = this.department_admin;
    }

    const matchedItem = allItems.find(item => {
      if ('subItems' in item) {
        return item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      } else {
        return item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      }
    });

    if (matchedItem) {
      if ('route' in matchedItem) {
        this.router.navigate([matchedItem.route]);
      } else if ('subItems' in matchedItem && matchedItem.subItems.length > 0) {
        this.router.navigate([matchedItem.subItems[0].route]);
      }
    }
  }

  async logout() {
    if (this.isGuestUser(this.user)) {
      sessionStorage.removeItem('guestUser');
      this.supabaseService.setGuestUser(null);
    } else {
      try {
        await this.supabaseService.signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    }
    this.user = null;
    this.router.navigate(['/home']);
  }

  loginAsGuest(userType: string) {
    const guestUser: GuestUser = {
      id: 'guest-' + Date.now(),
      email: `guest-${userType}@example.com`,
      user_type: userType,
    };
    sessionStorage.setItem('guestUser', JSON.stringify(guestUser));
    this.supabaseService.setGuestUser(guestUser);
    this.router.navigate(['/dashboard']);
  }
}
