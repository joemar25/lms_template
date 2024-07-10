import { Component} from '@angular/core';
import { pricingPlan } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent  {
  public pricingPlan : pricingPlan[] = [];
  public routes = routes;

  constructor(private DataService: DataService) {
    this.pricingPlan = this.DataService.pricingPlan;
    }


}
