import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/shared/service/routes/routes';
import { instructorGrid, allInstructorGrid } from 'src/app/shared/models/model';
interface data {
  active?: boolean;
}
@Component({
  selector: 'app-instructor-grid',
  templateUrl: './instructor-grid.component.html',
  styleUrls: ['./instructor-grid.component.scss'],
})
export class InstructorGridComponent implements OnInit {
  public routes = routes;
  public instructorGrid: instructorGrid[] = [];
  selected = '1';
  public searchDataValue = '';
  dataSource!: MatTableDataSource<instructorGrid>;
  // pagination variables
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getinstructorGrid();
  }
  private getinstructorGrid(): void {
    this.instructorGrid = [];
    this.serialNumberArray = [];

    this.data.allInstructorGrid().subscribe((res: allInstructorGrid) => {
      this.totalData = res.totalData;
      res.data.map((res: allInstructorGrid, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.totalData = serialNumber;
          this.instructorGrid.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<instructorGrid>(
        this.instructorGrid
      );
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.instructorGrid = this.dataSource.filteredData;
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getinstructorGrid();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getinstructorGrid();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getinstructorGrid();
  }

  public changePageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getinstructorGrid();
  }
  trackByFn(index: number, item: any): number {
    return item.id; // Assuming each item in `instructorGrid` has a unique `id` property
  }
  

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
  toggleClass(data: data) {
    data.active = !data.active;
  }
}
export interface pageSelection {
  skip: number;
  limit: number;
}
