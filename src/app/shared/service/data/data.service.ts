// src/app/services/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { routes } from '../routes/routes';

import {
  instructorCourseList,
  courseList,
  courseGrid,
  allInstructorList,
  allInstructorGrid,
  instructorTicket1,
  instructorTicket4,
  instructorTicket2,
  instructorTicket3,
  latestTransaction,
  Instructor_sideBar,
  Student_sideBar,
  apiResultFormat,
} from 'src/app/shared/models/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messages = '';
  message: BehaviorSubject<string>;
  constructor(private http: HttpClient) {
    this.message = new BehaviorSubject(this.messages);
  }
  nextmessage(data: string) {
    this.message.next(data);
  }
  public instructorCourseList(): Observable<instructorCourseList> {
    return this.http
      .get<instructorCourseList>('assets/JSON/instructorCourseList.json')
      .pipe(
        map((res: instructorCourseList) => {
          return res;
        })
      );
  }
  public allCourseList(): Observable<courseList> {
    return this.http.get<courseList>('assets/JSON/courseList.json').pipe(
      map((res: courseList) => {
        return res;
      })
    );
  }
  public gridCourseList(): Observable<courseGrid> {
    return this.http.get<courseGrid>('assets/JSON/courseGrid.json').pipe(
      map((res: courseGrid) => {
        return res;
      })
    );
  }
  public allInstructorList(): Observable<allInstructorList> {
    return this.http
      .get<allInstructorList>('assets/JSON/allInstructorList.json')
      .pipe(
        map((res: allInstructorList) => {
          return res;
        })
      );
  }
  public allInstructorGrid(): Observable<allInstructorGrid> {
    return this.http
      .get<allInstructorGrid>('assets/JSON/allInstructorGrid.json')
      .pipe(
        map((res: allInstructorGrid) => {
          return res;
        })
      );
  }
  public instructorTicket1(): Observable<instructorTicket1> {
    return this.http
      .get<instructorTicket1>('assets/JSON/instructorTicket1.json')
      .pipe(
        map((res: instructorTicket1) => {
          return res;
        })
      );
  }
  public instructorTicket4(): Observable<instructorTicket4> {
    return this.http
      .get<instructorTicket4>('assets/JSON/instructorTicket4.json')
      .pipe(
        map((res: instructorTicket4) => {
          return res;
        })
      );
  }
  public instructorTicket2(): Observable<instructorTicket2> {
    return this.http
      .get<instructorTicket2>('assets/JSON/instructorTicket2.json')
      .pipe(
        map((res: instructorTicket2) => {
          return res;
        })
      );
  }
  public instructorTicket3(): Observable<instructorTicket3> {
    return this.http
      .get<instructorTicket3>('assets/JSON/instructorTicket3.json')
      .pipe(
        map((res: instructorTicket3) => {
          return res;
        })
      );
  }
  public latestTransactionsList(): Observable<latestTransaction> {
    return this.http
      .get<latestTransaction>('assets/JSON/latestTransaction.json')
      .pipe(
        map((res: latestTransaction) => {
          return res;
        })
      );
  }

  public InstructorAnnouncement(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/JSON/instructor-announcements.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public InstructorAssignment(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/JSON/instructor-assignment.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public InstructorWithdraw(): Observable<apiResultFormat> {
    return this.http
      .get<apiResultFormat>('assets/JSON/instructor-withdraw.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public topCategories = [
    {
      img: 'assets/img/categories-icon.png',
      course: 'Angular Development',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Docker Development',
      instructors: '45 Instructors',
    },
    {
      img: 'assets/img/categories-icon-02.png',
      course: 'Node JS Frontend',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-03.png',
      course: 'Swift Development',
      instructors: '23 Instructors',
    },
    {
      img: 'assets/img/categories-icon-05.png',
      course: 'Python Development',
      instructors: '30 Instructors',
    },
    {
      img: 'assets/img/categories-icon-04.png',
      course: 'React Native',
      instructors: '80 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Angular Development',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-02.png',
      course: 'Docker Development',
      instructors: '45 Instructors',
    },
    {
      img: 'assets/img/categories-icon-03.png',
      course: 'Node JS Frontend',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-04.png',
      course: 'Swift Development',
      instructors: '23 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Python Development',
      instructors: '30 Instructors',
    },
    {
      img: 'assets/img/categories-icon-02.png',
      course: 'Docker Development',
      instructors: '45 Instructors',
    },
    {
      img: 'assets/img/categories-icon-03.png',
      course: 'Node JS Frontend',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-04.png',
      course: 'Swift Development',
      instructors: '40 Instructors',
    },
    {
      img: 'assets/img/categories-icon-01.png',
      course: 'Python Development',
      instructors: '30 Instructors',
    },
  ];
  public trendingCourses = [
    {
      img1: 'assets/img/course/course-07.jpg',
      newPrice: '$200',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user.jpg',
      name: 'John Michael',
      subject:
        'Learn JavaScript and Express to become a professional JavaScript',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-08.jpg',
      newPrice: '$300',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user2.jpg',
      name: 'John Smith',
      subject: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      lesson: '10+ Lesson',
      time: '11hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-05.jpg',
      newPrice: '$100',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user3.jpg',
      name: 'Lavern M.',
      subject: 'The Complete App Design Course - UX, UI and Design Thinking',
      lesson: '8+ Lesson',
      time: '8hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-08.jpg',
      newPrice: '$200',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user5.jpg',
      name: 'John Smith',
      subject: 'Build Responsive Real World Websites with HTML5 and CSS3',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-07.jpg',
      newPrice: '$300',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user2.jpg',
      name: 'John Smith',
      subject: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      lesson: '10+ Lesson',
      time: '11hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-09.jpg',
      newPrice: '$100',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user4.jpg',
      name: 'Lavern M.',
      subject: 'The Complete App Design Course - UX, UI and Design Thinking',
      lesson: '8+ Lesson',
      time: '8hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-08.jpg',
      newPrice: '$200',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user1.jpg',
      name: 'Lavern M.',
      subject:
        'Learn JavaScript and Express to become a professional JavaScript',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-09.jpg',
      newPrice: '$300',
      oldPrice: '$99.00',
      img2: 'assets/img/user/user3.jpg',
      name: 'John Smith',
      subject: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      lesson: '10+ Lesson',
      time: '11hr 30min',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
  ];
  public featuredInstructor = [
    {
      img: 'assets/img/user/user7.jpg',
      name: 'David Lee',
      domain: 'Web Developer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user8.jpg',
      name: 'Daziy Millar',
      domain: 'PHP Expert',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user9.jpg',
      name: 'Patricia Mendoza',
      domain: 'Web Developer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user10.jpg',
      name: 'Skyler Whites',
      domain: 'UI Designer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user7.jpg',
      name: 'Patricia Mendoza',
      domain: 'Java Developer',
      students: '40 Students',
    },
    {
      img: 'assets/img/user/user8.jpg',
      name: 'David Lee',
      domain: 'Web Developer',
      students: '50 Students',
    },
    {
      img: 'assets/img/user/user9.jpg',
      name: 'Daziy Millar',
      domain: 'PHP Expert',
      students: '40 Students',
    },
    {
      img: 'assets/img/user/user10.jpg',
      name: 'Patricia Mendoza',
      domain: 'Web Developer',
      students: '20 Students',
    },
    {
      img: 'assets/img/user/user7.jpg',
      name: 'Skyler Whites',
      domain: 'UI Designer',
      students: '30 Students',
    },
    {
      img: 'assets/img/user/user8.jpg',
      name: 'Patricia Mendoza',
      domain: 'Java Developer',
      students: '40 Students',
    },
  ];
  public latestBlogs = [
    {
      img: 'assets/img/blog/blog-01.jpg',
      content: 'Attract More Attention Sales And Profits',
      role: 'Marketing',
      date: 'Jun 15, 2022',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content: '11 Tips to Help You Get New Clients',
      role: 'Sales Order',
      date: 'May 20, 2022',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Design',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      content: 'A Solution Built for Teachers',
      role: 'Seo',
      date: 'Jul 15, 2022',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content: 'Attract More Attention Sales And Profits',
      role: 'Marketing',
      date: 'Sep 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Marketing',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      content: 'A Solution Built for Teachers',
      role: 'Analysis',
      date: 'May 15, 2022',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Sales',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content: 'An Overworked Newspaper Editor',
      role: 'Sales',
      date: 'May 25, 2022',
    },
    {
      img: 'assets/img/blog/blog-04.jpg',
      content: 'A Solution Built for Teachers',
      role: 'Marketing',
      date: 'April 15, 2022',
    },
  ];
  public featuredCourses = [
    {
      img1: 'assets/img/course/course-01.jpg',
      amount1: '$300',
      amount2: '$99.00',
      img2: 'assets/img/user/user1.jpg',
      name: 'Nicole Brown',
      content: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-02.jpg',
      amount1: '$400',
      amount2: '$99.00',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '11+ Lesson',
      time: '6hr 30min',
      rating1: '4.3',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-03.jpg',
      idle: 'FREE',
      img2: 'assets/img/user/user5.jpg',
      name: 'Jesse Stevens',
      content: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '16+ Lesson',
      time: '12hr 30min',
      rating1: '4.5',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-04.jpg',
      amount1: '$500 ',
      amount2: '$99.00',
      img2: 'assets/img/user/user4.jpg',
      name: 'Nicole Brown',
      content: 'Learn Angular Fundamentals From beginning to advance lavel',
      lesson: '10+ Lesson',
      time: '8hr 30min',
      rating1: '4.2',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-05.jpg',
      amount1: '$300 ',
      amount2: '$99.00',
      img2: 'assets/img/user/user3.jpg',
      name: 'John Smith',
      content: 'Build Responsive Real World Websites with HTML5 and CSS3',
      lesson: '13+ Lesson',
      time: '10hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
    {
      img1: 'assets/img/course/course-06.jpg',
      idle: 'FREE',
      img2: 'assets/img/user/user6.jpg',
      name: 'Stella Johnson',
      content: 'C# Developers Double Your Coding Speed with Visual Studio',
      lesson: '7+ Lesson',
      time: '7hr 30min',
      rating1: '4.6',
      rating2: '(15)',
      sale: 'BUY NOW',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
    },
  ];
  public career = [
    {
      img: 'assets/img/icon/icon-1.svg',
      content: 'Stay motivated with engaging instructors',
    },
    {
      img: 'assets/img/icon/icon-2.svg',
      content: 'Keep up with in the latest in cloud',
    },
    {
      img: 'assets/img/icon/icon-3.svg',
      content: 'Get certified with 100+ certification courses',
    },
    {
      img: 'assets/img/icon/icon-4.svg',
      content: 'Build skills your way, from labs to courses',
    },
  ];
  public universitiesCompanies = [
    {
      img: 'assets/img/lead-01.png',
    },
    {
      img: 'assets/img/lead-02.png',
    },
    {
      img: 'assets/img/lead-03.png',
    },
    {
      img: 'assets/img/lead-04.png',
    },
    {
      img: 'assets/img/lead-05.png',
    },
    {
      img: 'assets/img/lead-06.png',
    },
  ];
  public testimonial = [
    {
      img: 'assets/img/user/user1.jpg',
      name: 'Daziy Millar',
      sub: 'Founder of Awesomeux Technology',
      qute: 'assets/img/qute-01.png',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: 'assets/img/user/user3.jpg',
      name: 'john smith',
      sub: 'Founder of Awesomeux Technology',
      qute: 'assets/img/qute-01.png',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: 'assets/img/user/user2.jpg',
      name: 'David Lee',
      sub: 'Founder of Awesomeux Technology',
      qute: 'assets/img/qute-01.png',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  public bestSellingCourses = [
    {
      courses: 'Information About UI/UX  Design Degree',
      img: 'assets/img/course/course-10.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Wordpress for Beginners - Master Wordpress Quickly',
      img: 'assets/img/course/course-11.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Sketch from A to Z (2022): Become an app designer',
      img: 'assets/img/course/course-12.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
  ];
  public blogDetailsRecentPosts = [
    {
      img1: 'assets/img/blog/blog-01.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
    },
    {
      img1: 'assets/img/blog/blog-02.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: '3 Dec 2019',
    },
    {
      img1: 'assets/img/blog/blog-03.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: '3 Dec 2019',
    },
  ];
  public blogGrid = [
    {
      img1: 'assets/img/blog/blog-08.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Web Design',
      date: 'Jun 14, 2022',
      content: 'Learn Webs Applications Development from Experts',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-09.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Courses',
      date: 'May 24, 2022',
      content: 'Expand Your Career Opportunities With Python',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-10.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Web Design',
      date: 'Jun 14, 2022',
      content: 'Complete PHP Programming Career Guideline',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-11.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Courses',
      date: 'Sep 18, 2022',
      content: 'Programming Content Guideline For Beginners',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-12.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Web Design',
      date: 'Jun 26, 2022',
      content: 'The Complete JavaScript Course for Beginners',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img1: 'assets/img/blog/blog-13.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-23.svg',
      sub: 'Programming, Courses',
      date: 'Feb 14, 2022',
      content: 'Learn Mobile Applications Development from Experts',
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  public blogGridRecentPosts = [
    {
      img1: 'assets/img/blog/blog-01.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
    },
    {
      img1: 'assets/img/blog/blog-02.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: '3 Dec 2019',
    },
    {
      img1: 'assets/img/blog/blog-03.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: '3 Dec 2019',
    },
  ];
  public blogList = [
    {
      img1: 'assets/img/blog/blog-05.jpg',
      img2: 'assets/img/user/user.jpg',
      date: 'April 20, 2022',
      sub: 'Programming, Web Design',
      content: 'Learn Webs Applications Development from Experts',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-06.jpg',
      img2: 'assets/img/user/user1.jpg',
      date: 'May 20, 2021',
      sub: 'Programming, Courses',
      content: 'Expand Your Career Opportunities With Python',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-07.jpg',
      img2: 'assets/img/user/user3.jpg',
      date: 'Jun 14, 2022',
      sub: 'Programming, Web Design',
      content: 'Complete PHP Programming Career Guideline',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
  ];
  public blogListRecentPosts = [
    {
      img1: 'assets/img/blog/blog-01.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
    },
    {
      img1: 'assets/img/blog/blog-02.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: '3 Dec 2019',
    },
    {
      img1: 'assets/img/blog/blog-03.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: '3 Dec 2019',
    },
  ];
  public blogMasonry = [
    {
      img1: 'assets/img/blog/blog-08.jpg',
      date1: 'Jun 14, 2022',
      sub1: 'Programming, Web Design',
      content1: 'Learn Webs Applications Development from Experts',
      img2: 'assets/img/blog/blog-11.jpg',
      date2: 'Sep 18, 2022',
      sub2: 'Programming, Courses',
      content2: 'Programming Content Guideline For Beginners',
      img3: 'assets/img/icon/icon-22.svg',
      img4: 'assets/img/icon/icon-23.svg',
      paragraph1:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
      paragraph2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-09.jpg',
      date1: 'May 24, 2022',
      sub1: 'Programming, Courses',
      content1: 'Expand Your Career Opportunities With Python',
      img2: 'assets/img/blog/blog-09.jpg',
      date2: 'May 24, 2022',
      sub2: 'Programming, Courses',
      content2: 'Expand Your Career Opportunities With Python',
      img3: 'assets/img/icon/icon-22.svg',
      img4: 'assets/img/icon/icon-23.svg',
      paragraph1:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
      paragraph2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
    {
      img1: 'assets/img/blog/blog-10.jpg',
      date1: 'Jun 14, 2022',
      sub1: 'Programming, Web Design',
      content1: 'Complete PHP Programming Career Guideline',
      img2: 'assets/img/blog/blog-13.jpg',
      date2: 'Feb 14, 2022',
      sub2: 'Programming, Courses',
      content2: 'Learn Mobile Applications Development from Experts',
      img3: 'assets/img/icon/icon-22.svg',
      img4: 'assets/img/icon/icon-23.svg',
      paragraph1:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
      paragraph2:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Sed egestas, ante et vulputate volutpat, eros pede […]',
    },
  ];
  public blogModern = [
    {
      img1: 'assets/img/blog/blog-14.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jan 20, 2022',
      sub: 'Programming, Angular',
    },
    {
      img1: 'assets/img/blog/blog-15.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: 'Jun 10, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-16.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Mobile Applications Development from Experts',
      date: 'March 14, 2022',
      sub: 'Programming, React',
    },
    {
      img1: 'assets/img/blog/blog-17.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Complete PHP Programming Career Guideline',
      date: 'Jun 19, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-18.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Programming Content Guideline For Beginners',
      date: 'Nov 05, 2022',
      sub: 'Programming, Php',
    },
    {
      img1: 'assets/img/blog/blog-19.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'The Complete JavaScript Course for Beginners',
      date: 'Dec 11, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-14.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Webs Applications Development from Experts',
      date: 'Jun 14, 2022',
      sub: 'Programming, Course',
    },
    {
      img1: 'assets/img/blog/blog-15.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Expand Your Career Opportunities With Python',
      date: 'May 18, 2022',
      sub: 'Programming, Web Design',
    },
    {
      img1: 'assets/img/blog/blog-16.jpg',
      img2: 'assets/img/icon/icon-22.svg',
      img3: 'assets/img/icon/icon-24.svg',
      content: 'Learn Mobile Applications Development from Experts',
      date: 'Sep 23, 2022',
      sub: 'Programming, Course',
    },
  ];
  public notificationsToday = [
    {
      img: 'assets/img/user/user2.jpg',
      name: 'Rolands R',
      time: 'Today at 9:42 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
    {
      img: 'assets/img/user/user1.jpg',
      name: 'Jenis R.',
      time: 'Today at 10:08 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
  ];
  public notificationsYesterday = [
    {
      img: 'assets/img/user/user3.jpg',
      name: 'Jesse Stevens',
      time: 'Yesterday at 9:42 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
    {
      img: 'assets/img/user/user7.jpg',
      name: 'Rolands R',
      time: 'Yesterday at 5:40 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
    {
      img: 'assets/img/user/user11.jpg',
      name: 'John Michael',
      time: 'Yesterday at 7:40 AM',
      content:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,',
      setting: 'Mark as Read',
    },
  ];
  public pricingPlan = [
    {
      heading: 'Basic',
      content1:
        'For individuals who just need to start with the basic features',
      content2: 'per user, per month when billed monthly',
      dollar: '$',
      price: '10',
    },
    {
      heading: 'Team',
      content1:
        'For individuals who just need to start with the basic features',
      content2: 'per user, per month when billed monthly',
      dollar: '$',
      price: '10',
    },
    {
      heading: 'Pro',
      content1:
        'For individuals who just need to start with the basic features',
      content2: 'per user, per month when billed monthly',
      dollar: '$',
      price: '10',
    },
  ];
  public myCourse = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating: '4.0',
      ratingNum: '(15)',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '10+ Lesson',
      time: '7hr 20min',
      rating: '4.2',
      ratingNum: '(20)',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '05+ Lesson',
      time: '8hr 00min',
      rating: '4.0',
      ratingNum: '(10)',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Learn Angular Fundamentals From beginning to advance lavel',
      lesson: '30+ Lesson',
      time: '10hr 30min',
      rating: '4.3',
      ratingNum: '(25)',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'Build Responsive Real World Websites with HTML5 and CSS3',
      lesson: '20+ Lesson',
      time: '7hr 00min',
      rating: '4.0',
      ratingNum: '(15)',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      content: 'C# Developers Double Your Coding Speed with Visual Studio',
      lesson: '50+ Lesson',
      time: '10hr 30min',
      rating: '4.5',
      ratingNum: '(30)',
    },
  ];
  public depositInstructor = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public depositHistory = [
    {
      referredId: 'K2WX7JJ6R1UA',
      gateway: 'Stripe ',
      amount: '+ $45.00',
      time: '2022-05-18 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: '9RVE1N1TA1H3',
      gateway: 'Bank ',
      amount: '+ $75.00',
      time: '2022-05-08 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      gateway: 'Stripe ',
      amount: '+ $100.00',
      time: '2021-06-18 01:12 AM ',
      status: 'Complete',
    },
  ];
  public depositInstructorDashboard = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public profileDetails = [
    {
      heading: '50',
      paragraph: 'Purchased Courses',
      content: 'View All',
      img: 'assets/img/students/book.svg',
    },
    {
      heading: '30',
      paragraph: 'Total Transactions',
      content: 'View All',
      img: 'assets/img/students/receipt-text.svg',
    },
    {
      heading: '20',
      paragraph: 'Total Deposit',
      content: 'View All',
      img: 'assets/img/students/empty-wallet-tick.svg',
    },
    {
      heading: '$2055',
      paragraph: 'Total Withdraw',
      content: 'View All',
      img: 'assets/img/students/empty-wallet-change.svg',
    },
    {
      heading: '30',
      paragraph: 'Total Student',
      content: 'View All',
      img: 'assets/img/students/profile-user.svg',
    },
    {
      heading: '50',
      paragraph: 'Total Approved Course',
      content: 'View All',
      img: 'assets/img/students/book.svg',
    },
  ];
  public referredUsers = [
    {
      referredID: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredID: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $75.00',
      postBalance: '$75.00',
    },
    {
      referredID: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $100.00',
      postBalance: '$100.00',
    },
    {
      referredID: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $5.00',
      postBalance: '$5.00',
      status: 'negative',
    },
    {
      referredID: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '- $25.00',
      postBalance: '$25.00',
      status: 'negative',
    },
    {
      referredID: 'KSM5CW4EOEGQ',
      details: 'Added Balance Via Admin',
      amount: '+ $160.00',
      postBalance: 'S160.00',
    },
    {
      referredID: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $150.00',
      postBalance: '$150.00',
    },
    {
      referredID: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredID: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $10.00',
      postBalance: '$10.00',
    },
    {
      referredID: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $10.00',
      postBalance: '$10.00',
      status: 'negative',
    },
  ];
  public instructorCourse = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: 'Information About UI/UX Design Degree',
      students: '3200',
      status: 'Live',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      progress: 'progress stip',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      students: '0',
      status: 'Draft',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: 'Sketch from A to Z (2022): Become an app designer',
      students: '1500',
      status: 'Live',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: ' C# Developers Double Your Coding Speed with Visual Studio',
      students: '0',
      status: 'Pending',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/timer-start.svg',
      content: 'Build Responsive Real World Websites with HTML5 and CSS3',
      students: '0',
      status: 'Deleted',
      lesson: '10+ Lesson',
      time: '7hr 20min',
    },
  ];
  public instructorEarnings = [
    {
      courses: 'Information About UI/UX  Design Degree',
      img: 'assets/img/course/course-10.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Wordpress for Beginners - Master Wordpress Quickly',
      img: 'assets/img/course/course-11.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
    {
      courses: 'Sketch from A to Z (2022): Become an app designer',
      img: 'assets/img/course/course-12.jpg',
      sales: '34',
      amount: '$3,145.23',
    },
  ];
  public instructorEdit = [
    {
      heading: 'Profile Overview',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorEditEducation = [
    {
      heading: 'BCA - Bachelor of Computer Applications',
      letter: 'B',
      paragraph: 'International University - (2004 - 2010)',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'MCA - Master of Computer Application',
      letter: 'B',
      paragraph: 'International University - (2010 - 2012)',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Design Communication Visual',
      letter: 'B',
      paragraph: 'International University - (2012-2015)',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorEditExperience = [
    {
      heading: 'Web Design & Development Team Leader',
      paragraph: 'Creative Agency - (2013 - 2016)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Project Manager',
      paragraph: 'Jobcy Technology Pvt.Ltd - (Pressent)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorEditCourses = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      content1: 'Information About UI/UX Design Degree',
      newPrice: '$300',
      oldPrice: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content1: 'Wordpress for Beginners - Master Wordpress Quickly',
      newPrice: '$200',
      oldPrice: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
  ];
  public instructorEditReviews = [
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      img: 'assets/img/user/user1.jpg',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      img: 'assets/img/user/user1.jpg',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      img: 'assets/img/user/user1.jpg',
      setting: 'Reply',
    },
  ];
  public instructorEditOverview = [
    {
      heading: '32',
      paragraph: 'Courses',
      img: 'assets/img/instructor/courses-icon.png',
    },
    {
      heading: '11,604',
      paragraph: 'Total Students',
      img: 'assets/img/instructor/ttl-stud-icon.png',
    },
    {
      heading: '12,230',
      paragraph: 'Reviews',
      img: 'assets/img/instructor/review-icon.png',
    },
  ];
  public instructorEditContactDetails = [
    {
      heading: 'Email',
      paragraph: 'jennywilson@example.com',
      img: 'assets/img/instructor/email-icon.png',
    },
    {
      heading: 'Address',
      paragraph: '877 Ferry Street, Huntsville, Alabama',
      img: 'assets/img/instructor/address-icon.png',
    },
    {
      heading: 'Phone',
      paragraph: '+1(452) 125-6789',
      img: 'assets/img/instructor/phone-icon.png',
    },
  ];
  public orders = [
    {
      courses: 'Information About UI/UX Design Degree',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },

    {
      courses: 'Wordpress for Beginners - Master Wordpress Quickly',
      sales: '30',
      invoice: '#12421',
      date: '10-05-20',
      method: 'Visa',
    },

    {
      courses: ' Sketch from A to Z (2022): Become an app designer',
      sales: '24',
      invoice: '#11021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '  Learn Angular Fundamentals From beginning to advance lavel',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '   Build Responsive Real World Websites with HTML5 and CSS3',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '   C# Developers Double Your Coding Speed with Visual Studio',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses:
        ' Learn JavaScript and Express to become a professional JavaScript',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses:
        ' Learn and Understand AngularJS to become a professional developer',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: '  Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
    {
      courses: ' The Complete App Design Course - UX',
      sales: '34',
      invoice: '#10021',
      date: '10-05-20',
      method: 'Mastercard',
    },
  ];
  public withdrawHistory = [
    {
      id: '#1061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1800',
      method: 'Mastercard',
    },
    {
      id: '#1051',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1200',
      method: 'Mastercard',
    },
    {
      id: '#2061',
      date: '10-05-20',
      status: 'Pending',
      amount: '$1100',
      method: 'Visa',
    },
    {
      id: '#1021',
      date: '10-05-20',
      status: 'Cancel',
      amount: '$1200',
      method: 'Visa',
    },
    {
      id: '#1051',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1500',
      method: 'Mastercard',
    },
    {
      id: '#1061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$2200',
      method: 'Visa',
    },
    {
      id: '#2061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$3200',
      method: 'Mastercard',
    },
    {
      id: '#1161',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1400',
      method: 'Visa',
    },
    {
      id: '#3061',
      date: '10-05-20',
      status: 'Paid',
      amount: '$1300',
      method: 'Mastercard',
    },
    {
      id: '#1061',
      date: '10-05-20',
      status: 'Cancel',
      amount: '$1200',
      method: 'Mastercard',
    },
  ];
  public instructorProfileEducation = [
    {
      heading: 'BCA - Bachelor of Computer Applications',
      paragraph: 'International University - (2004 - 2010)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'MCA - Master of Computer Application',
      paragraph: 'International University - (2010 - 2012)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Design Communication Visual',
      paragraph: 'International University - (2012-2015)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorProfileExperience = [
    {
      heading: 'Web Design & Development Team Leader',
      paragraph: 'Creative Agency - (2013 - 2016)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Project Manager',
      paragraph: 'Jobcy Technology Pvt.Ltd - (Pressent)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public instructorProfileCourses = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      content: 'Information About UI/UX Design Degree',
      price1: '$300 ',
      price2: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      price1: '$300 ',
      price2: '$99.00',
      lesson: '12+ Lesson',
      role: 'Instructor',
      time: '9hr 30min',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'BUY NOW',
    },
  ];
  public instructorProfileReviews = [
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
    },
  ];
  public instructorProfile = [
    {
      heading: 'Profile Overview',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorProfileOverview = [
    {
      heading: '32',
      paragraph: 'Courses',
      img: 'assets/img/instructor/courses-icon.png',
    },
    {
      heading: '11,604',
      paragraph: 'Total Students',
      img: 'assets/img/instructor/ttl-stud-icon.png',
    },
    {
      heading: '12,230',
      paragraph: 'Reviews',
      img: 'assets/img/instructor/review-icon.png',
    },
  ];
  public instructorProfileContactDetails = [
    {
      heading: 'Email',
      paragraph: 'jennywilson@example.com',
      img: 'assets/img/instructor/email-icon.png',
    },
    {
      heading: 'Address',
      paragraph: '877 Ferry Street, Huntsville, Alabama',
      img: 'assets/img/instructor/address-icon.png',
    },
    {
      heading: 'Phone',
      paragraph: '+1(452) 125-6789',
      img: 'assets/img/instructor/phone-icon.png',
    },
  ];
  public instructorReviews = [
    {
      name: 'Nicole Brown',
      img: 'assets/img/user/user1.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
    {
      name: 'Jesse Stevens',
      img: 'assets/img/user/user2.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
    {
      name: 'John Smith',
      img: 'assets/img/user/user3.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
    {
      name: 'Stella Johnson',
      img: 'assets/img/user/user4.jpg',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Respond',
    },
  ];
  public instructorStudentGrid = [
    {
      img: 'assets/img/user/user1.jpg',
      name: 'Wade Warren',
      place: 'United States',
      date: '3/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user3.jpg',
      name: 'Dianna Smiley',
      place: 'Tunisia',
      date: '15/12/2019',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user2.jpg',
      name: 'Esther Howard',
      place: 'Spain',
      date: '6/10/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user5.jpg',
      name: 'Guy Hawkins',
      place: 'United States',
      date: '13/1/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user6.jpg',
      name: 'Jacob Jones',
      place: 'United Kingdom',
      date: '2/6/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user4.jpg',
      name: 'Kristin Watson',
      place: 'Iceland',
      date: '22/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user11.jpg',
      name: 'Rivao Luke',
      place: 'Brazil',
      date: '3/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user12.jpg',
      name: 'Nia Sikhone',
      place: 'Italy',
      date: '10/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
    {
      img: 'assets/img/user/user13.jpg',
      name: 'Xiaon Merry',
      place: 'France',
      date: '3/12/2020',
      number: '20%',
      content1: 'Enrolled',
      content2: 'Progress',
    },
  ];
  public instructorStudentList = [
    {
      name: 'Guy Hawkins',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img1.png',
    },
    {
      name: 'Dianna Smiley',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img2.png',
    },
    {
      name: 'Guy Hawkins',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img3.png',
    },
    {
      name: 'Jacob Jones',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img4.png',
    },
    {
      name: 'Kristin Watson',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img5.png',
    },
    {
      name: 'Rivao Luke',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img6.png',
    },
    {
      name: 'Nia Sikhone',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img7.png',
    },
    {
      name: 'Xiaon Merry',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img8.png',
    },
    {
      name: 'Guy Hawkins',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img9.png',
    },
    {
      name: 'Dianna Smiley',
      enrolled: '10-05-20',
      progress: '0%',
      locations: 'United States',
      img: 'assets/img/students/refer-img10.png',
    },
  ];
  public instructorTickets1 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public instructorTickets2 = [
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public instructorTickets3 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
  ];
  public instructorTickets4 = [
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public instructorGrid = [
    {
      img1: 'assets/img/user/user11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Rolands R',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jenis R.',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user4.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jesse Stevens',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stevens Jes',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user3.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Smith',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user5.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stella Johnson',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Micheal',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user1.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Nicole Brown',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Monroe Parker',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorGrid2 = [
    {
      img1: 'assets/img/user/user11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Rolands R',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jenis R.',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user4.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Jesse Stevens',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stevens Jes',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user3.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Smith',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user5.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Stella Johnson',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'John Micheal',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user1.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Nicole Brown',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
    {
      img1: 'assets/img/user/user13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      name: 'Monroe Parker',
      role: 'Instructor',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
    },
  ];
  public instructorList = [
    {
      img1: 'assets/img/user/user11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Rolands R',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Jenis R.',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user4.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Jesse Stevens',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Stevens Jes',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user3.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'John Smith',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user5.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'Stella Johnson',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
    {
      img1: 'assets/img/user/user12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/icon/user-icon.svg',
      name: 'John Micheal',
      role: 'Instructor',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
      student: '50 Students',
    },
  ];
  public transactionInstructorProfile = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public transactionsInstructor = [
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $75.00',
      postBalance: '$75.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $100.00',
      postBalance: '$100.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $5.00',
      postBalance: '$5.00',
      status: 'negative',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '- $25.00',
      postBalance: '$25.00',
      status: 'negative',
    },
    {
      referredId: 'KSM5CW4EOEGQ',
      details: 'Added Balance Via Admin',
      amount: '+ $160.00',
      postBalance: 'S160.00',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection',
      amount: '+ $150.00',
      postBalance: '$150.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD',
      amount: '+ $10.00',
      postBalance: '$10.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal',
      amount: '- $10.00',
      postBalance: '$10.00',
      status: 'negative',
    },
  ];
  public withdrawalInstructorProfile = [
    {
      img: 'assets/img/icon/icon-25.svg',
      heading: '32',
      paragraph: 'Courses',
    },
    {
      img: 'assets/img/icon/icon-26.svg',
      heading: '11,604',
      paragraph: 'Total Students',
    },
    {
      img: 'assets/img/icon/icon-27.svg',
      heading: '12,230',
      paragraph: 'Reviews',
    },
  ];
  public withdrawalInstructor = [
    {
      referredId: 'K2WX7JJ6R1UA',
      gateway: 'Stripe ',
      amount: '+ $45.00',
      time: '2022-05-18 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: '9RVE1N1TA1H3',
      gateway: 'Bank ',
      amount: '+ $75.00',
      time: '2022-05-08 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      gateway: 'Stripe ',
      amount: '+ $100.00',
      time: '2021-06-18 01:12 AM ',
      status: 'Complete',
    },
  ];
  public cart = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      heading: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      idle: 'FREE',
      rating1: '4.0',
      rating2: '(15)',
      setting: 'Remove',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      heading: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '10+ Lesson',
      time: '7hr 20min',
      price1: '$300',
      price2: '$99.00',
      rating1: '4.0',
      rating2: '(15)',
      setting: 'Remove',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      heading: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      price1: '$300',
      price2: '$99.00',
      rating1: '4.0',
      rating2: '(15)',
      setting: 'Remove',
    },
  ];
  public courseGrid = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      heading: 'Information About UI/UX Design Degree',
      price1: '$300',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      heading: 'Wordpress for Beginners - Master Wordpress Quickly',
      price1: '$200',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/user/user3.jpg',
      name: 'Jesse Stevens',
      heading: 'Wordpress for Beginners - Master Wordpress Quickly',
      idle: 'FREE',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/user/user4.jpg',
      name: 'Nicole Brown',
      heading: 'Learn Angular Fundamentals From ...',
      idle: 'FREE',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/user/user5.jpg',
      name: 'John Smith',
      heading: 'Build Responsive Real World Websites with ...',
      price1: '$29.99',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/user/user6.jpg',
      name: 'Stella Johnson',
      heading: 'C# Developers Double Your Coding Speed with ...',
      price1: '$300',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-16.jpg',
      img2: 'assets/img/user/user.jpg',
      name: 'John Michael',
      heading: 'Learn JavaScript and Express to become a...',
      price1: '$200',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/user/user4.jpg',
      name: 'Jesse Stevens',
      heading: 'Learn and Understand AngularJS to become a ...',
      price1: '$300',
      price2: '$99.00',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
    {
      img1: 'assets/img/course/course-17.jpg',
      img2: 'assets/img/user/user6.jpg',
      name: 'Monroe Parker',
      heading: 'Responsive Web Design Essentials HTML5 CSS3 ...',
      idle: 'FREE',
      role: 'Instructor',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      rating1: '4.0',
      rating2: '(15)',
      time: '9hr 30min',
      lesson: '12+ Lesson',
    },
  ];
  public welcomeLogin = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public register = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerFive = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerFour = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerOne = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerThree = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public registerTwo = [
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/register-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public courseList = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user1.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user2.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Sketch from A to Z (2022): Become an app designer',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Jesse Stevens',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user3.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Learn Angular Fundamentals From beginning to advance lavel',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Jesse Stevens',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user4.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Build Responsive Real World Websites with HTML5 and CSS3',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'John Smith',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user5.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'C# Developers Double Your Coding Speed with Visual Studio',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Stella Johnson',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user6.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1:
        'Learn JavaScript and Express to become a professional JavaScript',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'John Michael',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-16.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user7.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1:
        'Learn and Understand AngularJS to become a professional developer',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Nicole Brown',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user8.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Responsive Web Design Essentials HTML5 CSS3 and Bootstrap',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Monroe Parker',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-17.jpg',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user9.jpg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'The Complete App Design Course - UX, UI and Design Thinking',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Lavern M.',
      role: 'Instructor',
    },
  ];
  public latestCourses = [
    {
      img: 'assets/img/blog/blog-01.jpg',
      content1: 'Introduction LearnPress – LMS plugin',
      content2: 'FREE',
    },
    {
      img: 'assets/img/blog/blog-02.jpg',
      content1: 'Become a PHP Master and Make Money',
      content2: '$200',
    },
    {
      img: 'assets/img/blog/blog-03.jpg',
      content1: 'Learning jQuery Mobile for Beginners',
      content2: 'FREE',
    },
    {
      img: 'assets/img/blog/blog-01.jpg',
      content1: 'Improve Your CSS Workflow with SASS',
      content2: '$200',
    },
    {
      img: 'assets/img/blog/blog-01.jpg',
      content1: 'Improve Your CSS Workflow with SASS',
      content2: '$200',
    },
  ];
  public courseWishlist = [
    {
      img1: 'assets/img/course/course-13.jpg',
      img2: 'assets/img/user/user1.jpg',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      idle: 'FREE',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-14.jpg',
      img2: 'assets/img/user/user1.jpg',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-15.jpg',
      img2: 'assets/img/user/user1.jpg',
      img3: 'assets/img/icon/icon-01.svg',
      img4: 'assets/img/icon/icon-02.svg',
      amount1: '$300',
      amount2: '$99.00',
      content1: 'Information About UI/UX Design Degree',
      content2: 'BUY NOW',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
  ];
  public purchaseHistory = [
    {
      img1: 'assets/img/course/course-10.jpg',
      content1: 'Information About UI/UX',
      content2: 'Design Degree',
      content3: 'Invoice',
      idle: 'FREE',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user1.jpg',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      content1: 'Wordpress for Beginners - Master Wordpress',
      content2: 'Quickly',
      content3: 'Invoice',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user2.jpg',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
      amount1: '$300',
      amount2: '$99.00',
    },
    {
      img1: 'assets/img/course/course-12.jpg',
      content1: 'Sketch from A to Z (2022): Become an app',
      content2: 'designer',
      content3: 'Invoice',
      img2: 'assets/img/icon/icon-01.svg',
      img3: 'assets/img/icon/icon-02.svg',
      img4: 'assets/img/user/user3.jpg',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      name: 'Rolands R',
      role: 'Instructor',
      amount1: '$300',
      amount2: '$99.00',
    },
  ];
  public wishlist = [
    {
      img: 'assets/img/course/course-01.jpg',
      price: '$300',
      content1: 'Information About UI/UX Design Degree',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'Remove',
    },
    {
      img: 'assets/img/course/course-02.jpg',
      price: '$300',
      content1: 'Wordpress for Beginners - Master Wordpress Quickly',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'Remove',
    },
    {
      img: 'assets/img/course/course-03.jpg',
      price: '$300',
      content1: 'Sketch from A to Z (2022): Become an app designer',
      lesson: '12+ Lesson',
      time: '9hr 30min',
      rating1: '4.0',
      rating2: '(15)',
      content2: 'Remove',
    },
  ];
  public jobCategoryGraphics = [
    {
      img1: 'assets/img/category/category-01.jpg',
      content1: 'Logo Design',
      count1: '25',
      img2: 'assets/img/category/category-02.jpg',
      content2: 'Business Cards & Stationery',
      count2: '25',
      img3: 'assets/img/category/category-03.jpg',
      content3: 'Brochure Design',
      count3: '25',
      img4: 'assets/img/category/category-04.jpg',
      content4: 'Social Media Design',
      count4: '25',
      img5: 'assets/img/category/category-05.jpg',
      content5: 'Graphics for Streamers',
      count5: '25',
      img6: 'assets/img/category/category-06.jpg',
      content6: 'Photoshop Editing',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public jobCategoryprogramming = [
    {
      img1: 'assets/img/category/category-03.jpg',
      content1: 'Brochure Design',
      count1: '25',
      img2: 'assets/img/category/category-04.jpg',
      content2: 'Social Media Design',
      count2: '25',
      img3: 'assets/img/category/category-05.jpg',
      content3: 'Graphics for Streamers',
      count3: '25',
      img4: 'assets/img/category/category-06.jpg',
      content4: 'Photoshop Editing',
      count4: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public jobCategorymarketing = [
    {
      img1: 'assets/img/category/category-04.jpg',
      content1: 'Social Media Design',
      count1: '25',
      img2: 'assets/img/category/category-05.jpg',
      content2: 'Graphics for Streamers',
      count2: '25',
      img3: 'assets/img/category/category-06.jpg',
      content3: 'Photoshop Editing',
      count3: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public jobCategoryanimation = [
    {
      img1: 'assets/img/category/category-04.jpg',
      content1: 'Social Media Design',
      count1: '25',
      img2: 'assets/img/category/category-05.jpg',
      content2: 'Graphics for Streamers',
      count2: '25',
      img3: 'assets/img/category/category-06.jpg',
      content3: 'Photoshop Editing',
      count3: '25',
    },
    {
      img1: 'assets/img/category/category-07.jpg',
      content1: 'Brand Style Guides',
      count1: '25',
      img2: 'assets/img/category/category-08.jpg',
      content2: 'Illustration',
      count2: '25',
      img3: 'assets/img/category/category-09.jpg',
      content3: 'Flyer Design',
      count3: '25',
      img4: 'assets/img/category/category-10.jpg',
      content4: 'Icon Design',
      count4: '25',
      img5: 'assets/img/category/category-11.jpg',
      content5: 'Presentation Design',
      count5: '25',
      img6: 'assets/img/category/category-12.jpg',
      content6: 'Packaging & Label Design',
      count6: '25',
    },
    {
      img1: 'assets/img/category/category-13.jpg',
      content1: 'Game Art',
      count1: '25',
      img2: 'assets/img/category/category-14.jpg',
      content2: 'Pattern Design',
      count2: '25',
      img3: 'assets/img/category/category-15.jpg',
      content3: 'Book Design',
      count3: '25',
      img4: 'assets/img/category/category-16.jpg',
      content4: 'Invitation Design',
      count4: '25',
      img5: 'assets/img/category/category-17.jpg',
      content5: 'UX Design',
      count5: '25',
      img6: 'assets/img/category/category-18.jpg',
      content6: 'Infographic Design',
      count6: '25',
    },
  ];
  public courseStudent = [
    {
      img: 'assets/img/course/course-10.jpg',
      content: 'Information About UI/UX Design Degree',
      rating1: '4.0',
      rating2: 'Edit rating',
      progress: 'progress stip',
      completion: '35% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-11.jpg',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-12.jpg',
      content: 'Sketch from A to Z (2022): Become an app designer',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-13.jpg',
      content: 'Learn Angular Fundamentals From ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-14.jpg',
      content: 'Build Responsive Real World Websites with...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-15.jpg',
      content: 'C# Developers Double Your Coding Speed with ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-16.jpg',
      content: 'Learn JavaScript and Express to become a ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
    {
      img: 'assets/img/course/course-17.jpg',
      content: 'Responsive Web Design Essentials HTML5 CSS3 ...',
      rating1: '4.0',
      rating2: 'Edit rating',
      completion: '0% Completed',
      lesson: 'Start Lesson',
    },
  ];
  public depositStudent = [
    {
      referredId: 'K2WX7JJ6R1UA',
      gateway: 'Stripe ',
      amount: '+ $45.00',
      time: '2022-05-18 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: '9RVE1N1TA1H3',
      gateway: 'Bank ',
      amount: '+ $75.00',
      time: '2022-05-08 01:12 AM ',
      status: 'Complete',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      gateway: 'Stripe ',
      amount: '+ $100.00',
      time: '2021-06-18 01:12 AM ',
      status: 'Complete',
    },
  ];
  public depositStudentDashboard = [
    {
      img: 'assets/img/students/book.svg',
      count: '50',
      courses: 'Purchased Courses',
      content: 'View All',
    },
    {
      img: 'assets/img/students/receipt-text.svg',
      count: '30',
      courses: 'Total Transactions',
      content: 'View All',
    },
    {
      img: 'assets/img/students/empty-wallet-tick.svg',
      count: '20',
      courses: 'Total Deposit',
      content: 'View All',
    },
  ];
  public latestTransactions = [];
  public settingStudentInvoice = [
    {
      orderId: '#1001',
      date: '15-01-2020, 10:45pm',
      amount: '$50.00',
      status: 'Due',
    },
    {
      orderId: '#1002',
      date: '15-02-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1003',
      date: '15-03-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1004',
      date: '15-04-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1005',
      date: '15-05-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1006',
      date: '15-06-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1007',
      date: '15-07-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1008',
      date: '15-08-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1009',
      date: '15-09-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      orderId: '#1010',
      date: '15-10-2020, 10:45pm',
      amount: '$50.00',
      status: 'Completed',
    },
  ];
  public settingStudentEarnings = [
    {
      content1: 'Net Earnings',
      price: '$ 63,240',
      content2: 'Earning this month',
    },
    {
      content1: 'Balance',
      price: '$ 8,530',
      content2: 'Earning this month',
    },
    {
      content1: 'Avg Deal Size',
      price: '$ 2,600',
      content2: 'Earning this month',
    },
    {
      content1: 'Referral Signups',
      price: '$ 783',
      content2: 'Earning this month',
    },
  ];
  public settingStudentReferral = [
    {
      referrals: 'Guy Hawkins',
      img: 'assets/img/students/refer-img1.png',
      referredId: '09341',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '10',
      totalEarned: '$45.00',
    },
    {
      referrals: 'Dianna Smiley',
      img: 'assets/img/students/refer-img2.png',
      referredId: '09342',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '15',
      totalEarned: '$75.00',
    },
    {
      referrals: 'Guy Hawkin',
      img: 'assets/img/students/refer-img3.png',
      referredId: '09343',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '20',
      totalEarned: '$100.00',
    },
    {
      referrals: 'Jacob Jones',
      img: 'assets/img/students/refer-img4.png',
      referredId: '09344',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '1',
      totalEarned: '$44.00',
    },
    {
      referrals: 'Kristin Watson',
      img: 'assets/img/students/refer-img5.png',
      referredId: '09345',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '5',
      totalEarned: '$25.00',
    },
    {
      referrals: 'Rivao Luke',
      img: 'assets/img/students/refer-img6.png',
      referredId: '09346',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '500',
      totalEarned: '$160.00',
    },
    {
      referrals: 'Nia Sikhone',
      img: 'assets/img/students/refer-img7.png',
      referredId: '09347',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '187',
      totalEarned: '$150.00',
    },
    {
      referrals: 'Xiaon Merry',
      img: 'assets/img/students/refer-img8.png',
      referredId: '09348',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '10',
      totalEarned: '$45.00',
    },
    {
      referrals: 'Guy Hawkins',
      img: 'assets/img/students/refer-img9.png',
      referredId: '09349',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '15',
      totalEarned: '$10.00',
    },
    {
      referrals: 'Dianna Smiley',
      img: 'assets/img/students/refer-img10.png',
      referredId: '09350',
      url: 'https://quanbylmscourse.com/reffer/?refid=345re667877k9',
      visits: '98',
      totalEarned: '$10.00',
    },
  ];
  public settingStudentActive = [
    {
      content1: 'Started On',
      content2: 'Oct 1, 2022',
    },
    {
      content1: 'Price',
      content2: 'Monthly',
    },
    {
      content1: 'Access',
      content2: 'Access All Courses',
    },
    {
      content1: 'Billing Date',
      content2: 'Next Billing on Nov 1, 2022',
    },
  ];
  public settingStudentExpired = [
    {
      content1: 'Started On',
      content2: 'Oct 1, 2022',
    },
    {
      content1: 'Price',
      content2: 'Monthly',
    },
    {
      content1: 'Access',
      content2: 'Access All Courses',
    },
    {
      content1: 'Billing Date',
      content2: 'Next Billing on Nov 1, 2022',
    },
  ];
  public settingSupportTickets1 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public settingSupportTickets2 = [
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public settingSupportTickets3 = [
    {
      no: '[Ticket#001]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Mailing Issue',
      status: 'Closed',
    },
    {
      no: '[Ticket#002]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Language Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#003]',
      subject: 'Enabling SSH service',
      priority: 'High',
      category: 'Installation Error',
      status: 'Closed',
    },
    {
      no: '[Ticket#004]',
      subject: 'when will start the order',
      priority: 'Medium',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
  ];
  public settingSupportTickets4 = [
    {
      no: '[Ticket#005]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Low',
      category: 'Submit Issue',
      status: 'Opened',
    },
    {
      no: '[Ticket#006]',
      subject: 'need a freelancer software',
      priority: 'High',
      category: 'Submit Issues',
      status: 'Opened',
    },
    {
      no: '[Ticket#007]',
      subject: 'I have a problem',
      priority: 'Low',
      category: 'Demo Problem',
      status: 'Opened',
    },
    {
      no: '[Ticket#008]',
      subject: 'Enabling SSH service',
      priority: 'Medium',
      category: 'Demo Problems',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#009]',
      subject: 'when will start the order',
      priority: 'Low',
      category: 'Mailing Issue',
      status: 'Inprogress',
    },
    {
      no: '[Ticket#010]',
      subject: 'I need blog comment backlinks from example.co.uk',
      priority: 'Medium',
      category: 'Installation Error',
      status: 'Inprogress',
    },
  ];
  public studentProfileEducation = [
    {
      heading: 'BCA - Bachelor of Computer Applications',
      paragraph: 'International University - (2004 - 2010)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'MCA - Master of Computer Application',
      paragraph: 'International University - (2010 - 2012)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Design Communication Visual',
      paragraph: 'International University - (2012-2015)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public studentProfileExperience = [
    {
      heading: 'Web Design & Development Team Leader',
      paragraph: 'Creative Agency - (2013 - 2016)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
    {
      heading: 'Project Manager',
      paragraph: 'Jobcy Technology Pvt.Ltd - (Pressent)',
      letter: 'B',
      content:
        'There are many variations of passages of available, but the majority alteration in some form. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience.',
    },
  ];
  public studentProfileCourses = [
    {
      img1: 'assets/img/course/course-10.jpg',
      img2: 'assets/img/user/user1.jpg',
      name: 'Rolands R',
      content: 'Information About UI/UX Design Degree',
      price1: '$300 ',
      price2: '$99.00',
      role: 'Instructor',
      lesson: '12+ Lesson',
      student: '50 Students',
      time: '9hr 30min',
    },
    {
      img1: 'assets/img/course/course-11.jpg',
      img2: 'assets/img/user/user2.jpg',
      name: 'Jenis R.',
      content: 'Wordpress for Beginners - Master Wordpress Quickly',
      price1: '$200 ',
      price2: '$99.00',
      role: 'Instructor',
      lesson: '12+ Lesson',
      student: '50 Students',
      time: '9hr 30min',
    },
  ];
  public studentProfileReviews = [
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Reply',
    },
    {
      name: 'Nicole Brown',
      role: 'UX/UI Designer',
      content:
        '“ This is the second Photoshop course I have completed with Cristian. Worth every penny and recommend it highly. To get the most out of this course, its best to to take the Beginner to Advanced course first. The sound and video quality is of a good standard. Thank you Cristian. “',
      setting: 'Reply',
    },
  ];
  public studentProfileContactDetails = [
    {
      heading: 'Email',
      paragraph: 'jennywilson@example.com',
      img: 'assets/img/instructor/email-icon.png',
    },
    {
      heading: 'Address',
      paragraph: '877 Ferry Street, Huntsville, Alabama',
      img: 'assets/img/instructor/address-icon.png',
    },
    {
      heading: 'Phone',
      paragraph: '+1(452) 125-6789',
      img: 'assets/img/instructor/phone-icon.png',
    },
  ];
  public studentGrid1 = [
    {
      img1: 'assets/img/user/user1.jpg',
      name: 'Charles Dickens',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      name: 'Gabriel Palmer',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'France',
    },

    {
      img1: 'assets/img/user/user3.jpg',
      name: 'James Lemire',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Italy',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Olivia Murphy',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Brazil',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Rebecca Swartz',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user6.jpg',
      name: 'Betty Richards',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },

    {
      img1: 'assets/img/user/user14.jpg',
      name: 'Jeffrey Montgomery',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United Kingdom',
    },

    {
      img1: 'assets/img/user/user11.jpg',
      name: 'Brooke Hayes',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },

    {
      img1: 'assets/img/user/user12.jpg',
      name: 'Gertrude D. Shorter',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user13.jpg',
      name: 'David L. Garza',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Spain',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Vivian E. Winders',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Tunisia',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Sean K. Leon',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },
  ];
  public studentGrid2 = [
    {
      img1: 'assets/img/user/user1.jpg',
      name: 'Charles Dickens',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },
    {
      img1: 'assets/img/user/user2.jpg',
      name: 'Gabriel Palmer',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'France',
    },

    {
      img1: 'assets/img/user/user3.jpg',
      name: 'James Lemire',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Italy',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Olivia Murphy',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Brazil',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Rebecca Swartz',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user6.jpg',
      name: 'Betty Richards',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Iceland',
    },

    {
      img1: 'assets/img/user/user14.jpg',
      name: 'Jeffrey Montgomery',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United Kingdom',
    },

    {
      img1: 'assets/img/user/user11.jpg',
      name: 'Brooke Hayes',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },

    {
      img1: 'assets/img/user/user12.jpg',
      name: 'Gertrude D. Shorter',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Louisiana',
    },

    {
      img1: 'assets/img/user/user13.jpg',
      name: 'David L. Garza',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Spain',
    },

    {
      img1: 'assets/img/user/user4.jpg',
      name: 'Vivian E. Winders',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'Tunisia',
    },

    {
      img1: 'assets/img/user/user5.jpg',
      name: 'Sean K. Leon',
      role: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place: 'United States',
    },
  ];
  public studentList = [
    {
      img1: 'assets/img/students/student-01.jpg',
      name1: 'Charles Dickens',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Brazil',

      img3: 'assets/img/students/student-02.jpg',
      name2: 'Gabriel Palmer',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Italy',
    },
    {
      img1: 'assets/img/students/student-03.jpg',
      name1: 'James Lemire',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Louisiana',

      img3: 'assets/img/students/student-04.jpg',
      name2: 'Olivia Murphy',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'France',
    },
    {
      img1: 'assets/img/students/student-05.jpg',
      name1: 'Rebecca Swartz',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Iceland',

      img3: 'assets/img/students/student-06.jpg',
      name2: 'Betty Richards',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Louisiana',
    },
    {
      img1: 'assets/img/students/student-07.jpg',
      name1: 'Jeffrey Montgomery',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Brazil',

      img3: 'assets/img/students/student-08.jpg',
      name2: 'Brooke Hayes',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'United States',
    },
    {
      img1: 'assets/img/students/student-09.jpg',
      name1: 'Gertrude Shorter',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Louisiana',

      img3: 'assets/img/students/student-10.jpg',
      name2: 'David Garza',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Tunisia',
    },
    {
      img1: 'assets/img/students/student-11.jpg',
      name1: 'Vivian Winders',
      role1: 'Student',
      img2: 'assets/img/students/loc-icon.svg',
      place1: 'Louisiana',

      img3: 'assets/img/students/student-12.jpg',
      name2: 'Sean Leon',
      role2: 'Student',
      img4: 'assets/img/students/loc-icon.svg',
      place2: 'Spain',
    },
  ];
  public transactionStudent = [
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection ',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD ',
      amount: '+ $75.00',
      postBalance: '$75.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD  ',
      amount: '+ $100.00',
      postBalance: '$100.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal ',
      status: 'negative',
      amount: '- $5.00',
      postBalance: '$5.00',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection ',
      status: 'negative',
      amount: '- $25.00',
      postBalance: '$25.00',
    },
    {
      referredId: 'KSM5CW4EOEGQ',
      details: 'Added Balance Via Admin  ',
      amount: '+ $160.00',
      postBalance: 'S160.00',
    },
    {
      referredId: 'K2WX7JJ6R1UA',
      details: '10 USD Refunded from withdrawal rejection ',
      amount: '+ $150.00',
      postBalance: ' $150.00',
    },
    {
      referredId: '9RVE1N1TA1H3',
      details: 'Deposit Via Stripe Hosted - USD  ',
      amount: '+ $45.00',
      postBalance: '$45.00',
    },
    {
      referredId: 'C83Z7EQ4A1WX',
      details: 'Deposit Via Stripe Hosted - USD  ',
      amount: '+ $10.00',
      postBalance: '$10.00',
    },
    {
      referredId: '1C6A5M4YPV39',
      details: 'Withdraw Via Bank withdrawal ',
      amount: '- $10.00',
      postBalance: '$10.00',
    },
  ];
  public forgotPassword = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public newPassword = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];
  public verificationCode = [
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      img: 'assets/img/login-img.png',
      content1: 'Welcome to',
      content2: 'QuanbyLMS Courses.',
      paragraph:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public sideBar: Array<any> = [
    {
      tittle: 'Home',
      base: 'home',
      // base2: 'home-two',
      // base3: 'home-three',
      // base4: 'home-four',
      showAsTab: false,
      separateRoute: true,
      // route: 'javascript:void(0)',
      route: routes.home,
      menu: [
        {
          menuValue: 'Home',
          route: routes.home,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home',
          subMenus: [],
        },
        {
          menuValue: 'Home Two',
          route: routes.home2,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home-two',
          subMenus: [],
        },
        {
          menuValue: 'Home Three',
          route: routes.home3,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home-three',
          subMenus: [],
        },
        {
          menuValue: 'Home Four',
          route: routes.home4,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'home-four',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Courses',
      base: 'instructor',
      showAsTab: false,
      separateRoute: true,
      route: routes.instructor_list,
      menu: [
        {
          menuValue: 'Instructor',
          // route: '/instructor/instructor-view/instructor-list',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-view',
          last: 'instructor-list',
          subMenus: [
            {
              menuValue: 'List',
              route: routes.instructor_list,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'instructor',
              page: 'instructor-view',
              last: 'instructor-list',
              subMenus: [],
            },
            {
              menuValue: 'Grid',
              route: routes.instructor_grid,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'instructor',
              page: 'instructor-view',
              last: 'instructor-grid',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Dashboard',
          route: routes.instructor_dashboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-dashboard',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Profile',
          route: routes.instructorProfile,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-profile',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Course',
          route: routes.instructor_course,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-course',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Wishlist',
          route: routes.instructorWishlist,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-wishlist',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.instructor_reviews,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-reviews',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Quiz Attempts',
          route: routes.instructorQuizAttempts,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-quiz-attempts',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Orders',
          route: routes.instructor_orders,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-orders',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Question & Answer',
          route: routes.instructorQA,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-qa',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Referrals',
          route: routes.instructorReferral,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-referral',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Messages',
          route: routes.instructor_chat,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-chat',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Support Ticket',
          route: routes.instructor_tickets,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-tickets',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Notifications',
          route: routes.instructor_notification,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'instructor-notification',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.instructorSettings,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'instructor',
          page: 'settings',
          last: 'instructor-settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Student',
      base: 'student',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Student',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'student',
          page: 'student-view',
          last: 'students-list',
          subMenus: [
            {
              menuValue: 'List',
              route: routes.students_list,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'student',
              page: 'student-view',
              last: 'students-list',
              subMenus: [],
            },
            {
              menuValue: 'Grid',
              route: routes.students_grid,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'student',
              page: 'student-view',
              last: 'students-grid',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Student Dashboard',
          route: routes.studentDashboard,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-dashboard',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Profile',
          route: routes.students_profile,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-profile',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Enrolled Courses',
          route: routes.studentCourses,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-courses',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Wishlist',
          route: routes.studentWishlist,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-wishlist',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.studentReviews,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-reviews',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'My Quiz Attempts',
          route: routes.studentsQuiz,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-quiz',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Orders',
          route: routes.studentOrderHistory,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-order-history',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Question & Answer',
          route: routes.studentsQA,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-qa',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Messages',
          route: routes.studentsMessage,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-message',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Referral',
          route: routes.students_referral,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-referral',
          last: '',
          subMenus: [],
        },

        {
          menuValue: 'Support Tickets',
          route: routes.students_tickets,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'student-tickets',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Settings',
          route: routes.studentSettings,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'student',
          page: 'settings',
          last: 'student-settings',
          subMenus: [],
        },
      ],
    },

    {
      tittle: 'Pages',
      base: 'pages',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Notifications',
          route: routes.page_notifications,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'notifications',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Pricing Plan',
          route: routes.page_pricing_plan,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'pricing-plan',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Wishlist',
          route: routes.page_wishlist,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'wishlist',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Course',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'pages',
          page: 'course',
          last: 'course-list',
          subMenus: [
            {
              menuValue: 'Add Course',
              route: routes.page_add_course,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'add-course',
              subMenus: [],
            },
            {
              menuValue: 'Course List',
              route: routes.page_course_list,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'course-list',
              subMenus: [],
            },
            {
              menuValue: 'Course Grid',
              route: routes.page_course_grid,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'course-grid',
              subMenus: [],
            },
            {
              menuValue: 'Course Details',
              route: routes.page_course_details,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'pages',
              page: 'course',
              last: 'course-details',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'Error',
          hasSubRoute: true,
          showSubRoute: false,
          page: 'error',
          subMenus: [
            {
              menuValue: 'Coming Soon',
              route: routes.coming_soon,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'come-soon',
              last: '',
              subMenus: [],
            },
            {
              menuValue: '404',
              route: routes.error_404,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'error404',
              last: '',
              subMenus: [],
            },
            {
              menuValue: '500',
              route: routes.error_500,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'error500',
              last: '',
              subMenus: [],
            },
            {
              menuValue: 'Under Construction',
              route: routes.under_construction,
              hasSubRoute: false,
              showSubRoute: false,
              base: 'error',
              page: 'under-construction',
              last: '',
              subMenus: [],
            },
          ],
        },
        {
          menuValue: 'FAQ',
          route: routes.page_faq,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'faq',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Support',
          route: routes.page_support,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'support',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Category',
          route: routes.page_job_category,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'job-category',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Cart',
          route: routes.page_cart,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'cart',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Checkout',
          route: routes.page_checkout,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'pages',
          page: 'checkout',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Login',
          route: routes.login,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'login',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Register',
          route: routes.register,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'register-page',
          last: 'register',
          subMenus: [],
        },
        {
          menuValue: 'Forgot Password',
          route: routes.forgot_password,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'auth',
          page: 'forgot-password',
          last: '',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Blog',
      base: 'blog',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Blog List',
          route: routes.blog_list,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-list',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Grid',
          route: routes.blog_grid,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-grid',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Masonry',
          route: routes.blog_masonry,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-masonry',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Modern',
          route: routes.blog_modern,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-modern',
          last: '',
          subMenus: [],
        },
        {
          menuValue: 'Blog Details',
          route: routes.blog_details,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'blog',
          page: 'blog-details',
          last: '',
          subMenus: [],
        },
      ],
    },
  ];
  public Instructor_sideBar = [
    {
      tittle: 'DASHBOARD',
      class: false,
      menu: [
        {
          menuValue: 'My Dashboard',
          route: routes.instructor_dashboard,
          icon: 'home',
          base: 'instructor-dashboard',
          subMenus: [],
        },
        {
          menuValue: 'My Courses',
          route: routes.instructor_course,
          icon: 'book',
          base: 'instructor-course',
          subMenus: [],
        },
        {
          menuValue: 'Reviews',
          route: routes.instructor_reviews,
          icon: 'star',
          base: 'instructor-reviews',
          subMenus: [],
        },
        {
          menuValue: 'Earnings',
          route: routes.instructor_earnings,
          icon: 'pie-chart',
          base: 'instructor-earnings',
          subMenus: [],
        },
        {
          menuValue: 'Orders',
          route: routes.instructor_orders,
          icon: 'shopping-bag',
          base: 'instructor-orders',
          subMenus: [],
        },
        {
          menuValue: 'Students',
          route: routes.instructor_student_grid,
          icon: 'home',
          base: 'instructor-student-grid',
          subMenus: [],
        },
        {
          menuValue: 'Payouts',
          route: routes.instructor_payouts,
          icon: 'dollar-sign',
          base: 'instructor-payouts',
          subMenus: [],
        },
        {
          menuValue: 'Support Tickets',
          route: routes.instructor_tickets,
          icon: 'server',
          base: 'instructor-tickets',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'ACCOUNT SETTINGS',
      class: true,
      menu: [
        {
          menuValue: 'Edit Profile',
          route: routes.instructor_edit_profile,
          icon: 'settings',
          base: 'instructor-edit-profile',
          subMenus: [],
        },
        {
          menuValue: 'Security',
          route: routes.instructor_security,
          icon: 'user',
          base: 'instructor-security',
          subMenus: [],
        },
        {
          menuValue: 'Social Profiles',
          route: routes.instructor_social_profiles,
          icon: 'refresh-cw',
          base: 'instructor-social-profiles',
          subMenus: [],
        },
        {
          menuValue: 'Notifications',
          route: routes.instructor_notification,
          icon: 'bell',
          base: 'instructor-notification',
          subMenus: [],
        },
        {
          menuValue: 'Profile Privacy',
          route: routes.instructor_profile_privacy,
          icon: 'lock',
          base: 'instructor-profile-privacy',
          subMenus: [],
        },
        {
          menuValue: 'Delete Profile',
          route: routes.instructor_delete_profile,
          icon: 'trash-2',
          base: 'instructor-delete-profile',
          subMenus: [],
        },
        {
          menuValue: 'Linked Accounts',
          route: routes.instructor_linked_account,
          icon: 'user',
          base: 'instructor-linked-account',
          subMenus: [],
        },
        {
          menuValue: 'Sign Out',
          route: routes.home,
          icon: 'power',
          base: '',
          subMenus: [],
        },
      ],
    },
  ];

  public getInstructorSideBarData: BehaviorSubject<Array<Instructor_sideBar>> =
    new BehaviorSubject<Array<Instructor_sideBar>>(this.Instructor_sideBar);

  public Student_sideBar = [
    {
      tittle: 'ACCOUNT SETTINGS',
      class: false,
      menu: [
        {
          menuValue: 'Edit Profile',
          route: routes.students_edit_profile,
          icon: 'settings',
          base: 'setting-edit-profile',
          subMenus: [],
        },
        {
          menuValue: 'Security',
          route: routes.students_security,
          icon: 'user',
          base: 'setting-student-security',
          subMenus: [],
        },
        {
          menuValue: 'Social Profiles',
          route: routes.students_social_profile,
          icon: 'refresh-cw',
          base: 'setting-student-social-profile',
          subMenus: [],
        },
        {
          menuValue: 'Notifications',
          route: routes.students_notification,
          icon: 'bell',
          base: 'setting-student-notification',
          subMenus: [],
        },
        {
          menuValue: 'Profile Privacy',
          route: routes.students_privacy,
          icon: 'lock',
          base: 'setting-student-privacy',
          subMenus: [],
        },
        {
          menuValue: 'Delete Profile',
          route: routes.students_delete,
          icon: 'trash-2',
          base: 'setting-student-delete-profile',
          subMenus: [],
        },
        {
          menuValue: 'Linked Accounts',
          route: routes.students_accounts,
          icon: 'user',
          base: 'setting-student-accounts',
          subMenus: [],
        },
        {
          menuValue: 'Referrals',
          route: routes.students_referral,
          icon: 'user-plus',
          base: 'setting-student-referral',
          subMenus: [],
        },
        {
          menuValue: 'Sign Out',
          route: routes.login,
          icon: 'power',
          base: 'login',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'SUBSCRIPTION',
      class: false,
      menu: [
        {
          menuValue: 'My Subscriptions',
          route: routes.students_subscription,
          icon: 'calendar',
          base: 'setting-student-subscription',
          subMenus: [],
        },
        {
          menuValue: 'Billing Info',
          route: routes.students_billing,
          icon: 'credit-card',
          base: 'setting-student-billing',
          subMenus: [],
        },
        {
          menuValue: 'Payment',
          route: routes.students_payments,
          icon: 'credit-card',
          base: 'setting-student-payment',
          subMenus: [],
        },
        {
          menuValue: 'Invoice',
          route: routes.students_invoice,
          icon: 'clipboard',
          base: 'setting-student-invoice',
          subMenus: [],
        },
      ],
    },
  ];





  // start  routes based from the template:


  // public sidebarItems = [
  //   {
  //     title: 'Media',
  //     icon: '&#9660;',
  //     isOpenKey: 'media',
  //     subItems: [
  //       { title: 'Media Manager', route: this.routes.media_manager },
  //       { title: 'Create Media', route: this.routes.media_manager_create },
  //       { title: 'Media Manager Settings', route: this.routes.media_manager_settings }
  //     ]
  //   },
  //   {
  //     title: 'Users',
  //     icon: '&#9660;',
  //     isOpenKey: 'users',
  //     subItems: [
  //       { title: 'Instructors', route: this.routes.users_instructors},
  //       { title: 'Insturctors Payout', route: this.routes.users_instructors_payout },
  //       { title: 'Students', route: this.routes.users_students },
  //       { title: 'Staffs', route: this.routes.users_staffs},
  //       { title: 'Roles', route: this.routes.users_roles },

  //       { title: 'Delete Account Requests', route: this.routes.users_delete_account_requests }

  //     ]
  //   },
  //   {
  //     title: 'Settings',
  //     icon: '&#9660;',
  //     isOpenKey: 'settings',
  //     subItems: [
  //       { title: 'System Settings', route: this.routes.settings_system },
  //       { title: 'API Settings', route: this.routes.settings_api },
  //       { title: 'SMS Settings', route: this.routes.settings_sms },
  //       { title: 'Vimeo Settings', route: this.routes.settings_vimeo },
  //       { title: 'Vdocipher Settings', route: this.routes.settings_vdocipher },
  //       { title: 'Localization Settings', route: this.routes.settings_localization },
  //       { title: 'Module Manager', route: this.routes.settings_module_manager },
  //       { title: 'Sidebar Manager', route: this.routes.settings_sidebar_manager },
  //       { title: 'Themes Settings', route: this.routes.settings_themes },
  //       { title: 'Themes Customize', route: this.routes.settings_themes_customize },
  //       { title: 'Themes Font', route: this.routes.settings_themes_font },
  //       { title: 'Newsletter Settings', route: this.routes.settings_newsletter },
  //       { title: 'Mailchimp Settings', route: this.routes.settings_newsletter_mailchimp },
  //       { title: 'GetResponse Settings', route: this.routes.settings_newsletter_get_response },
  //       { title: 'Acelle Settings', route: this.routes.settings_newsletter_acelle },
  //       { title: 'Subscriber Settings', route: this.routes.settings_newsletter_subscriber },
  //       { title: 'Push Notification Settings', route: this.routes.settings_push_notification },
  //       { title: 'Utilities Settings', route: this.routes.settings_utilities },
  //       { title: 'Preloader Settings', route: this.routes.settings_preloader },
  //       { title: 'Geo Location Settings', route: this.routes.settings_geo_location },
  //       { title: 'Error Log Settings', route: this.routes.settings_error_log },
  //       { title: 'IP Block Settings', route: this.routes.settings_ip_block },
  //       { title: 'Maintenance Settings', route: this.routes.settings_maintenance },
  //       { title: 'Update System Settings', route: this.routes.settings_update_system },
  //       { title: 'City Settings', route: this.routes.settings_city },
  //       { title: 'Cache Settings', route: this.routes.settings_cache },
  //       { title: 'Queue Settings', route: this.routes.settings_queue },
  //       { title: 'Cron Job Settings', route: this.routes.settings_cron_job },
  //       { title: 'Captcha Settings', route: this.routes.settings_captcha },
  //       { title: 'Social Login Settings', route: this.routes.settings_social_login },
  //       { title: 'Payout Accounts Settings', route: this.routes.settings_payout_accounts },
  //       { title: 'Cookie Settings', route: this.routes.settings_cookie },
  //       { title: 'Analytics Settings', route: this.routes.settings_analytics },
  //       { title: 'Pusher Settings', route: this.routes.settings_pusher },
  //       { title: 'Gdrive Settings', route: this.routes.settings_gdrive },
  //       { title: 'SEO Settings', route: this.routes.settings_seo },
  //       { title: 'Currencies Settings', route: this.routes.settings_currencies },
  //       { title: 'Timezone Settings', route: this.routes.settings_timezone },
  //       { title: 'Activation Settings', route: this.routes.settings_activation },
  //       { title: 'General Settings', route: this.routes.settings_general },
  //       { title: 'Email Settings', route: this.routes.settings_email },
  //       { title: 'Email Template Settings', route: this.routes.settings_email_template },
  //       { title: 'Payout Settings', route: this.routes.settings_payout },
  //       { title: 'Backup Settings', route: this.routes.settings_backup }
  //     ]
  //   },
  //   {
  //     title: 'No Main Route',
  //     icon: '&#9660;',
  //     isOpenKey: 'noMainRoute',
  //     subItems: [
  //       { title: 'Departments', route: this.routes.departments },
  //       { title: 'Course Categories', route: this.routes.courses_categories },
  //       { title: 'Course Levels', route: this.routes.courses_levels },
  //       { title: 'Course Settings', route: this.routes.courses_settings },
  //       { title: 'Course Subjects', route: this.routes.courses_subjects },
  //       { title: 'Question Groups', route: this.routes.quizzes_question_groups },
  //       { title: 'Question Banks', route: this.routes.quizzes_question_banks },
  //       { title: 'Quiz Setups', route: this.routes.quizzes_setups },
  //       { title: 'Quiz Results', route: this.routes.quizzes_results },
  //       { title: 'Virtual Classes', route: this.routes.virtual_classes },
  //       { title: 'Zoom Settings', route: this.routes.zoom_settings },
  //       { title: 'Certificates', route: this.routes.certificates },
  //       { title: 'Certificate Fonts', route: this.routes.certificates_fonts },
  //       { title: 'Certificate Settings', route: this.routes.certificates_settings },
  //       { title: 'Revenue', route: this.routes.revenue },
  //       { title: 'Instructors Revenue', route: this.routes.revenue_instructors },
  //       { title: 'Revenue Statistics', route: this.routes.revenue_statistics },
  //       { title: 'Enrollments', route: this.routes.enrollments },
  //       { title: 'Refund and Cancellation', route: this.routes.enrollments_refund_n_cancellation },
  //       { title: 'Refund Settings', route: this.routes.enrollments_refund_settings },
  //       { title: 'Notifications', route: this.routes.communication_notifications },
  //       { title: 'Private Messages', route: this.routes.communication_private_messages },
  //       { title: 'Manage Coupons', route: this.routes.coupons_manage },
  //       { title: 'Single Coupons', route: this.routes.coupons_single },
  //       { title: 'Personalized Coupons', route: this.routes.coupons_personalized },
  //       { title: 'Invite Code Coupons', route: this.routes.coupons_invite_code },
  //       { title: 'Invite Settings', route: this.routes.coupons_invite_settings },
  //       { title: 'Online Payment', route: this.routes.payment_online },
  //       { title: 'Offline Payment', route: this.routes.payment_offline },
  //       { title: 'Bank Payment', route: this.routes.payment_bank },
  //       { title: 'Payment Commission', route: this.routes.payment_commission },
  //       { title: 'Blogs', route: this.routes.blogs },
  //       { title: 'Blog Comments', route: this.routes.blogs_comments },
  //       { title: 'Questions', route: this.routes.questions },
  //       { title: 'Question Settings', route: this.routes.questions_settings },
  //       { title: 'Header Menu', route: this.routes.cmo_header_menu },
  //       { title: 'Menu Settings', route: this.routes.cmo_menu_settings },
  //       { title: 'Sliders', route: this.routes.cmo_sliders },
  //       { title: 'Slider Settings', route: this.routes.cmo_sliders_settings },
  //       { title: 'Page Content', route: this.routes.cmo_page_content },
  //       { title: 'Testimonials', route: this.routes.cmo_testimonials },
  //       { title: 'Social Settings', route: this.routes.cmo_social_settings },
  //       { title: 'Pages', route: this.routes.cmo_pages },
  //       { title: 'Become an Instructor', route: this.routes.cmo_become_instructor },
  //       { title: 'Sponsors', route: this.routes.cmo_sponsors },
  //       { title: 'Popup Content', route: this.routes.cmo_popup_content },
  //       { title: 'Footer Settings', route: this.routes.cmo_footer_settings },
  //       { title: 'Login Page', route: this.routes.cmo_login_page },
  //       { title: 'FAQ', route: this.routes.cmo_faq },
  //       { title: 'Header Footer Style', route: this.routes.cmo_header_footer_style },
  //       { title: 'Gamification', route: this.routes.gamification },
  //       { title: 'Gamification Badges', route: this.routes.gamification_badges },
  //       { title: 'Gamification History', route: this.routes.gamification_history }
  //     ]
  //   },
    
  // ];


  //   end  routes based from the template:

  public getStudentSideBarData: BehaviorSubject<Array<Student_sideBar>> =
    new BehaviorSubject<Array<Student_sideBar>>(this.Student_sideBar);
}
