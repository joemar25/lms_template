import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloaderRoutingModule } from './preloader-routing.module';
import { PreloaderComponent } from './preloader.component';

@NgModule({
  declarations: [PreloaderComponent],
  imports: [CommonModule, PreloaderRoutingModule],
})
export class PreloaderModule {}
