import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStepThreeComponent } from './register-step-three.component';

const routes: Routes = [{ path: '', component: RegisterStepThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepThreeRoutingModule {}
