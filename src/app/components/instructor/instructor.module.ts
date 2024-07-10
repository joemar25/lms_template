import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { InstructorAnnouncementsComponent } from './instructor-announcements/instructor-announcements.component';
import { InstructorAssignmentComponent } from './instructor-assignment/instructor-assignment.component';
import { InstructorWishlistComponent } from './instructor-wishlist/instructor-wishlist.component';
import { InstructorQaComponent } from './instructor-qa/instructor-qa.component';
import { InstructorQuizComponent } from './instructor-quiz/instructor-quiz.component';
import { InstructorQuizAttemptsComponent } from './instructor-quiz-attempts/instructor-quiz-attempts.component';
import { InstructorQuizAttemptsDetailsComponent } from './instructor-quiz-attempts-details/instructor-quiz-attempts-details.component';
import { InstructorReferralComponent } from './instructor-referral/instructor-referral.component';
import { InstructorWithdrawComponent } from './instructor-withdraw/instructor-withdraw.component';
import { InstructorTicketsComponent } from './instructor-tickets/instructor-tickets.component';
import { InstructorOrdersComponent } from './instructor-orders/instructor-orders.component';
import { InstructorReviewsComponent } from './instructor-reviews/instructor-reviews.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { InstructorNotificationComponent } from './instructor-notification/instructor-notification.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { InstructorChatComponent } from './instructor-chat/instructor-chat.component';
import { InstructorEarningsComponent } from './instructor-earnings/instructor-earnings.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { InstructorCourseComponent } from './instructor-course/instructor-course.component';
import { RouterModule } from '@angular/router';
import { InstructorQuizDetailsComponent } from './instructor-quiz-details/instructor-quiz-details.component';
import { InstructorEnrolledCourseComponent } from './instructor-enrolled-course/instructor-enrolled-course.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    InstructorComponent,
    InstructorAnnouncementsComponent,
    InstructorAssignmentComponent,
    InstructorWishlistComponent,
    InstructorQaComponent,
    InstructorQuizComponent,
    InstructorQuizAttemptsComponent,
    InstructorQuizAttemptsDetailsComponent,
    InstructorReferralComponent,
    InstructorWithdrawComponent,
    InstructorTicketsComponent,
    InstructorOrdersComponent,
    InstructorReviewsComponent,
    InstructorProfileComponent,
    InstructorNotificationComponent,
    InstructorEditComponent,
    InstructorChatComponent,
    InstructorEarningsComponent,
    InstructorDashboardComponent,
    InstructorCourseComponent,
    InstructorQuizDetailsComponent,
    InstructorEnrolledCourseComponent,
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FeatherIconModule,
    RouterModule,
    SharedModule,
  ],
})
export class InstructorModule { }
