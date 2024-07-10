import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student-wishlist',
  templateUrl: './student-wishlist.component.html',
  styleUrl: './student-wishlist.component.scss'
})
export class StudentWishlistComponent {
  public routes = routes;
  public isClassAdded: boolean[] = [false];

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
