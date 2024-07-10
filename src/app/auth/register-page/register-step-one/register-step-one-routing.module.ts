import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStepOneComponent } from './register-step-one.component';

const routes: Routes = [{ path: '', component: RegisterStepOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepOneRoutingModule {}
