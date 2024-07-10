import { Component } from '@angular/core';
import { jobCategoryGraphics, jobCategoryprogramming, jobCategorymarketing, jobCategoryanimation } from 'src/app/shared/models/model';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent  {
  public routes = routes;
  public jobCategoryGraphics: jobCategoryGraphics[] = [];
  public jobCategoryprogramming: jobCategoryprogramming[] = [];
  public jobCategorymarketing: jobCategorymarketing[] = [];
  public jobCategoryanimation: jobCategoryanimation[] = [];


  constructor(private DataService: DataService) {
    this.jobCategoryGraphics = this.DataService.jobCategoryGraphics;
    this.jobCategoryprogramming = this.DataService.jobCategoryprogramming;
    this.jobCategorymarketing = this.DataService.jobCategorymarketing;
    this.jobCategoryanimation = this.DataService.jobCategoryanimation;

  }

}
