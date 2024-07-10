import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CacheRoutingModule } from './cache-routing.module';
import { CacheComponent } from './cache.component';

@NgModule({
  declarations: [CacheComponent],
  imports: [CommonModule, CacheRoutingModule],
})
export class CacheModule {}
