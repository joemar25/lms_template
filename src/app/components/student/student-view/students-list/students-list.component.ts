import { Component } from '@angular/core';
import { studentList } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent  {
  public routes = routes;
  public studentList: studentList [] = [];

  constructor(private DataService: DataService) {
    this.studentList = this.DataService.studentList;}

  

}
