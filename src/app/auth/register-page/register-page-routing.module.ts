import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
    children: [
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'register-step-five',
        loadChildren: () =>
          import('./register-step-five/register-step-five.module').then(
            (m) => m.RegisterStepFiveModule
          ),
      },
      {
        path: 'register-step-four',
        loadChildren: () =>
          import('./register-step-four/register-step-four.module').then(
            (m) => m.RegisterStepFourModule
          ),
      },
      {
        path: 'register-step-one',
        loadChildren: () =>
          import('./register-step-one/register-step-one.module').then(
            (m) => m.RegisterStepOneModule
          ),
      },
      {
        path: 'register-step-three',
        loadChildren: () =>
          import('./register-step-three/register-step-three.module').then(
            (m) => m.RegisterStepThreeModule
          ),
      },
      {
        path: 'register-step-two',
        loadChildren: () =>
          import('./register-step-two/register-step-two.module').then(
            (m) => m.RegisterStepTwoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
