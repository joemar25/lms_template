import { Component } from '@angular/core';
import { orders } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-orders',
  templateUrl: './instructor-orders.component.html',
  styleUrls: ['./instructor-orders.component.scss']
})
export class InstructorOrdersComponent  {
  public routes = routes;
  public orders: orders[] = [];

  constructor(private DataService: DataService) {
    this.orders = this.DataService.orders;
  }



}
