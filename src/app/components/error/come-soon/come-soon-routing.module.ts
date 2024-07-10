import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComeSoonComponent } from './come-soon.component';

const routes: Routes = [{ path: '', component: ComeSoonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComeSoonRoutingModule { }
