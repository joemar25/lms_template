import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStepFourComponent } from './register-step-four.component';

const routes: Routes = [{ path: '', component: RegisterStepFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepFourRoutingModule {}
