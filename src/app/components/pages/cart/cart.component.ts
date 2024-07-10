import { Component } from '@angular/core';
import { cart } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  public routes = routes;
  public cart: cart[] = [];

  constructor(private DataService: DataService) {
    this.cart = this.DataService.cart;}
 

}
