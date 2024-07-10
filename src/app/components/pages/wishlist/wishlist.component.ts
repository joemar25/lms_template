import { Component } from '@angular/core';
import { wishlist } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent  {
  public routes = routes;
  public wishlist: wishlist []= [];

  constructor(private DataService: DataService) {
    this.wishlist = this.DataService.wishlist;
  }


}
