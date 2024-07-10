import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaManagerRoutingModule } from './media-manager-routing.module';
import { MediaManagerComponent } from './media-manager.component';

@NgModule({
  declarations: [MediaManagerComponent],
  imports: [
    CommonModule,
    MediaManagerRoutingModule
  ]
})
export class MediaManagerModule { }
