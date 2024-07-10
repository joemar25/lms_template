import { Component } from '@angular/core';
import { NavigationStart, Router, Event as RouterEvent } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent {
  public routes = routes;
  last = '';
 

  

  constructor(private router: Router) {
    this.updateLastFromUrl(this.router.url);
    this.router.events.subscribe((data: RouterEvent) => {
      if (data instanceof NavigationStart) {
        this.updateLastFromUrl(data.url);
      }
    });
  }

  private updateLastFromUrl(url: string): void {
    const parts = url.split('/');
    const lastPart = parts[2]?.replace('instructor-', '').trim();

    if (lastPart === 'profile') {
      this.last = 'My Profile';
    } else if (lastPart === 'course') {
      this.last = 'My Courses';
    } else if (lastPart === 'chat') {
      this.last = 'Messages';
    } else if (lastPart === 'quiz-attempts'){
      this.last = 'My Quiz Attempts';
    }
    else if (lastPart === 'tickets'){
      this.last = 'Support Tickets';
    }
    else if (lastPart === 'qa'){
      this.last = 'Question & Answer';
    }
   
    
    else {
      this.last = lastPart;
    }
  }
  }