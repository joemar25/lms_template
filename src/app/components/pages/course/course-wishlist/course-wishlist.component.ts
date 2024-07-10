import { Component } from '@angular/core';
import { courseWishlist } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
interface data {
  active?:boolean;
}
@Component({
  selector: 'app-course-wishlist',
  templateUrl: './course-wishlist.component.html',
  styleUrls: ['./course-wishlist.component.scss']
})
export class CourseWishlistComponent  {
  public courseWishlist: courseWishlist[] = [];
  public routes = routes;

  constructor(private DataService: DataService) {
    this.courseWishlist = this.DataService.courseWishlist;
  }

 
  toggleClass(data:data) {
    data.active = !data.active;
  }
}
