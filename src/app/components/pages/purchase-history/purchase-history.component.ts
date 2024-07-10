import { Component } from '@angular/core';
import { purchaseHistory } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent  {
  public purchaseHistory: purchaseHistory[] = [];
  public routes = routes;
  constructor(private DataService: DataService) {
    this.purchaseHistory = this.DataService.purchaseHistory;
  }



}
