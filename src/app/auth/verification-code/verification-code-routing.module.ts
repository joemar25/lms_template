import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationCodeComponent } from './verification-code.component';

const routes: Routes = [{ path: '', component: VerificationCodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationCodeRoutingModule {}
