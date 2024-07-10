import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackupRoutingModule } from './backup-routing.module';
import { BackupComponent } from './backup.component';

@NgModule({
  declarations: [BackupComponent],
  imports: [CommonModule, BackupRoutingModule],
})
export class BackupModule {}
