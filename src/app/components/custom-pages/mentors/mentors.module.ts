import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { MentorsRoutingModule } from './mentors-routing.module';
import { MentorsComponent } from './mentors.component';

@NgModule({
  declarations: [MentorsComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,  
    MentorsRoutingModule
  ],
})
export class MentorsModule {}
