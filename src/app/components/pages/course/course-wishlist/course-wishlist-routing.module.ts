import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseWishlistComponent } from './course-wishlist.component';

const routes: Routes = [{ path: '', component: CourseWishlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseWishlistRoutingModule { }
