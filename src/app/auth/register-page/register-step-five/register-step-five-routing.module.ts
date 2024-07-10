import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStepFiveComponent } from './register-step-five.component';

const routes: Routes = [{ path: '', component: RegisterStepFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepFiveRoutingModule {}
