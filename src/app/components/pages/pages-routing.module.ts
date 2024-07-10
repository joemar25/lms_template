import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('./course/course.module').then((m) => m.CourseModule),
      },

      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'job-category',
        loadChildren: () =>
          import('./job-category/job-category.module').then(
            (m) => m.JobCategoryModule
          ),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'pricing-plan',
        loadChildren: () =>
          import('./pricing-plan/pricing-plan.module').then(
            (m) => m.PricingPlanModule
          ),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./support/support.module').then((m) => m.SupportModule),
      },
      {
        path: 'wishlist',
        loadChildren: () =>
          import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
      },
      {
        path: 'term-condition',
        loadChildren: () =>
          import('./term-condition/term-condition.module').then(
            (m) => m.TermConditionModule
          ),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./privacy-policy/privacy-policy.module').then(
            (m) => m.PrivacyPolicyModule
          ),
      },
    ],
  },
  {
    path: 'purchase-history',
    loadChildren: () =>
      import('./purchase-history/purchase-history.module').then(
        (m) => m.PurchaseHistoryModule
      ),
  },
  {
    path: 'pricing-plan2',
    loadChildren: () =>
      import('./pricing-plan2/pricing-plan2.module').then(
        (m) => m.PricingPlan2Module
      ),
  },
  {
    path: 'help-center',
    loadChildren: () =>
      import('./help-center/help-center.module').then(
        (m) => m.HelpCenterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
