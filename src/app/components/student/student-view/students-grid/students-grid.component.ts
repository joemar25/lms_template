import { Component } from '@angular/core';
import { studentGrid1 } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.scss']
})
export class StudentsGridComponent  {
  public routes = routes;
  public studentGrid1: studentGrid1[] = [];

  constructor(private DataService: DataService) {
    this.studentGrid1 = this.DataService.studentGrid1;}


}
