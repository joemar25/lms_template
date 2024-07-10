import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-linked-accounts',
  
  templateUrl: './student-linked-accounts.component.html',
  styleUrl: './student-linked-accounts.component.scss'
})
export class StudentLinkedAccountsComponent {
  public routes = routes;
}
