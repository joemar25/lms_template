import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronJobComponent } from './cron-job.component';

const routes: Routes = [
  {
    path: '',
    component: CronJobComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronJobRoutingModule {}
