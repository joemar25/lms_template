import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-notification',
  templateUrl: './instructor-notification.component.html',
  styleUrls: ['./instructor-notification.component.scss']
})
export class InstructorNotificationComponent  {
  public routes = routes;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  constructor( ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    
    
   
  }
}
