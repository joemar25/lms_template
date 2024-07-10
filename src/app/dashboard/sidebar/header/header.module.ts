import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  
import { OurHeaderRoutingModule } from './header-routing.module';
import { OurHeaderComponent } from './header.component';

@NgModule({
  declarations: [OurHeaderComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,  
    OurHeaderRoutingModule
  ],
})
export class HeaderModule {}
