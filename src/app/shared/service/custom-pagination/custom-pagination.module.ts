import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPaginationComponent } from './custom-pagination.component';

@NgModule({
  declarations: [CustomPaginationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CustomPaginationComponent],
})
export class CustomPaginationModule {}
