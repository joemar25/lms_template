import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpBlockComponent } from './ip-block.component';

const routes: Routes = [
  {
    path: '',
    component: IpBlockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpBlockRoutingModule {}
