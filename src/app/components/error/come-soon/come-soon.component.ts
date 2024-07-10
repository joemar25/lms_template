import { Component } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';
interface TimeDifference {
  day: number;
  hour: number;
  minute: number;
}

@Component({
  selector: 'app-come-soon',
  templateUrl: './come-soon.component.html',
  styleUrls: ['./come-soon.component.scss'],
})
export class ComeSoonComponent {
  public routes = routes;
  public projectStartDate: Date = new Date(new Date().getFullYear() + 1, 0, 1);

  

  public getDataDiff(): TimeDifference {
    const diff = this.projectStartDate.getTime() - new Date().getTime();
    const days = Math.floor(diff / (60 * 60 * 24 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    const minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    return {
      day: days,
      hour: hours,
      minute: minutes,
    };
  }

 
}
