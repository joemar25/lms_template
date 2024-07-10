import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { apiResultFormat, instructorAssignment } from 'src/app/shared/models/model';
import { PaginationService, pageSelection, tablePageSize } from 'src/app/shared/service/custom-pagination/pagination.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-assignment',
  templateUrl: './instructor-assignment.component.html',
  styleUrl: './instructor-assignment.component.scss'
})
export class InstructorAssignmentComponent {
  public routes = routes;
  selected = '1';
  selected2 = '1';
  selected3 = '1';
  // pagination variables
  public tableData: Array<instructorAssignment> = [];
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<instructorAssignment>;
  public searchDataValue = '';
  public tableDataCopy: Array<instructorAssignment> = [];
  public actualData: Array<instructorAssignment> = [];
  //** pagination variables
  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.data.InstructorAssignment().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.instructorAssignment) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
   
   
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.InstructorAssignment().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: instructorAssignment, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
          this.tableDataCopy.push(res);
        }
      });
      this.dataSource = new MatTableDataSource<instructorAssignment>(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
}
