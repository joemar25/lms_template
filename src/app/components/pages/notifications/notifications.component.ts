import { Component } from '@angular/core';
import { notificationsToday, notificationsYesterday } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  public routes = routes;
  public notificationsToday : notificationsToday[] = [];
  public notificationsYesterday : notificationsYesterday[] = [];

  constructor(private DataService: DataService) {
    this.notificationsToday = this.DataService.notificationsToday;
    this.notificationsYesterday = this.DataService.notificationsYesterday;
    }

  }


