import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-wishlist',
  templateUrl: './instructor-wishlist.component.html',
  styleUrl: './instructor-wishlist.component.scss'
})
export class InstructorWishlistComponent {
  public routes = routes
  public isClassAdded: boolean[] = [false];

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

}
