import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {
  public routes = routes;
  public isClassAdded: boolean[] = [false];

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
