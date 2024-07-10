import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronJobRoutingModule } from './cron-job-routing.module';
import { CronJobComponent } from './cron-job.component';

@NgModule({
  declarations: [CronJobComponent],
  imports: [CommonModule, CronJobRoutingModule],
})
export class CronJobModule {}
