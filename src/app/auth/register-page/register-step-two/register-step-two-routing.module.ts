import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStepTwoComponent } from './register-step-two.component';

const routes: Routes = [{ path: '', component: RegisterStepTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterStepTwoRoutingModule {}
