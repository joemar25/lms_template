// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import { DataService } from 'src/app/shared/service/data/data.service';
// import * as AOS from 'aos';
// import { routes } from 'src/app/shared/service/routes/routes';
// import {
//   topCategories,
//   trendingCourses,
//   featuredInstructor,
//   latestBlogs,
//   featuredCourses,
//   career,
//   universitiesCompanies,
//   testimonial,
// } from 'src/app/shared/models/model';
// import { trigger, transition, style, animate } from '@angular/animations';
// interface data {
//   active?: boolean;
// }
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     trigger('fadeInOut', [
//       transition(':enter', [
//         style({ opacity: 0, transform: 'translateY(50px)' }), // Initial position and opacity
//         animate('900ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })) // Animation to fade in and translate
//       ]),
//       transition(':leave', [
//         animate('500ms ease-in', style({ opacity: 0, transform: 'translateX(-50px)' })) // Animation to fade out and translate
//       ])
//     ])
//   ]
// })
// export class HomeComponent implements OnInit {

//   images = [
//     { src: 'assets/img/girl.png', height: '500px', width: '500px' },
//     { src: 'assets/img/students/certification.png', height: '600px', width: '500px' },
//     { src: 'assets/img/male-student-img.png', height: '600px', width: '500px' }
//   ];

//   currentIndex = 0;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   timer: any;

//   ngOnInit() {
//     AOS.init({ duration: 1200, once: true });
//     this.startCarousel();
//   }
//   ngOnDestroy() {
//     clearInterval(this.timer);
//   }

//   startCarousel() {
//     this.timer = setInterval(() => {
//       this.currentIndex = (this.currentIndex + 1) % this.images.length;
//     }, 6000); // Change image every 6 seconds
//   }

//   get currentImage() {
//     return this.images[this.currentIndex];
//   }

//   public routes = routes;
//   public topCategories: topCategories[] = [];
//   public trendingCourses: trendingCourses[] = [];
//   public featuredInstructor: featuredInstructor[] = [];
//   public latestBlogs: latestBlogs[] = [];
//   public featuredCourses: featuredCourses[] = [];
//   public career: career[] = [];
//   public universitiesCompanies: universitiesCompanies[] = [];
//   public testimonial: testimonial[] = [];
//   selected = '1';
//   public topCategoriesOwlOptions: OwlOptions = {
//     margin: 24,
//     nav: true,
//     loop: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 4,
//       },
//       1170: {
//         items: 3,
//       },
//     },
//   };
//   public trendingCoursesOwlOptions: OwlOptions = {
//     margin: 24,
//     nav: true,
//     loop: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 3,
//       },
//       1170: {
//         items: 3,
//       },
//     },
//   };
//   public featuredInstructorOwlOptions: OwlOptions = {
//     margin: 24,
//     nav: true,
//     loop: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 4,
//       },
//       1170: {
//         items: 4,
//       },
//     },
//   };
//   public latestBlogsOwlOptions: OwlOptions = {
//     margin: 24,
//     nav: true,
//     loop: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 4,
//       },
//       1170: {
//         items: 4,
//       },
//     },
//   };
//   public universitiesCompaniesOwlOptions: OwlOptions = {
//     margin: 24,
//     nav: true,
//     loop: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 6,
//       },
//       1170: {
//         items: 6,
//       },
//     },
//   };
//   public slideConfig = {
//     lazyLoad: 'ondemand',
//     infinite: true,
//   };

//   navigateTo(path: string): void {
//     this.router.navigate([path]);
//   }

//   constructor(private DataService: DataService, public router: Router) {
//     this.topCategories = this.DataService.topCategories;
//     this.trendingCourses = this.DataService.trendingCourses;
//     this.featuredInstructor = this.DataService.featuredInstructor;
//     this.latestBlogs = this.DataService.latestBlogs;
//     this.featuredCourses = this.DataService.featuredCourses;
//     this.career = this.DataService.career;
//     this.universitiesCompanies = this.DataService.universitiesCompanies;
//     this.testimonial = this.DataService.testimonial;
//   }
//   toggleClass(slide: data) {

//     slide.active = !slide.active;
//   }
//   directPath() {
//     this.router.navigate(['/pages/course/course-list']);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  public routeLinks = [
    { title: 'Admission', route: routes.admission },
    { title: 'Enrollment', route: routes.enrollment }
    
  ];

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
