// src/app/dashboard/dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurSidebarComponent } from './sidebar.component';
const routes: Routes = [
  {
    path: '',
    component: OurSidebarComponent,
    children: [


      // student information

      {
        path: 'assessments',
        loadChildren: () =>
          import('src/app/components/student_information/assessments/assessments.module').then(
            (m) => m.AssessmentsModule
          ),
      },

      {
        path: 'attendance',
        loadChildren: () =>
          import('src/app/components/student_information/attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },

      {
        path: 'clearance',
        loadChildren: () =>
          import('src/app/components/student_information/clearance/clearance.module').then(
            (m) => m.ClearanceModule
          ),
      },

      {
        path: 'document-management',
        loadChildren: () =>
          import('src/app/components/student_information/document-management/document-management.module').then(
            (m) => m.DocumentManagementModule
          ),
      },

      {
        path: 'kiosk',
        loadChildren: () =>
          import('src/app/components/student_information/kiosk/kiosk.module').then(
            (m) => m.KioskModule
          ),
      },

      {
        path: 'queuing',
        loadChildren: () =>
          import('src/app/components/student_information/queuing/queuing.module').then(
            (m) => m.QueuingModule
          ),
      },

      {
        path: 'schedules',
        loadChildren: () =>
          import('src/app/components/student_information/schedules/schedules.module').then(
            (m) => m.SchedulesModule
          ),
      },

      {
        path: 'scholarships',
        loadChildren: () =>
          import('src/app/components/student_information/scholarships/scholarships.module').then(
            (m) => m.ScholarshipsModule
          ),
      },
      // end student information

      {
        path: 'class-records',
        loadChildren: () =>
          import('src/app/components/grading-system/class-records/class-records.module').then(
            (m) => m.ClassRecordsModule
          ),
      },

      {
        path: 'grades',
        loadChildren: () =>
          import('src/app/components/grading-system/grades/grades.module').then(
            (m) => m.GradesModule
          ),
      },

      {
        path: 'report-generation',
        loadChildren: () =>
          import('src/app/components/grading-system/report-generation/report-generation.module').then(
            (m) => m.ReportGenerationModule
          ),
      },

      {
        path: 'absences',
        loadChildren: () =>
          import('src/app/components/absences/absences.module').then(
            (m) => m.AbsencesModule
          ),
      },

      {
        path: 'calendar',
        loadChildren: () =>
          import('src/app/components/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },

      {
        path: 'notification',
        loadChildren: () =>
          import('src/app/components/custom-pages/notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },

      {
        path: 'curriculum',
        loadChildren: () =>
          import('src/app/components/evaluation/curriculum/curriculum.module').then(
            (m) => m.CurriculumModule
          ),
      },

      {
        path: 'teacher',
        loadChildren: () =>
          import('src/app/components/evaluation/teacher/teacher.module').then(
            (m) => m.TeacherModule
          ),
      },

      // student
      {
        path: 'mentors',
        loadChildren: () =>
          import('src/app/components/custom-pages/mentors/mentors.module').then(
            (m) => m.MentorsModule
          ),
      },
      {
        path: 'message',
        loadChildren: () =>
          import('src/app/components/custom-pages/message/message.module').then(
            (m) => m.MessageModule
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('src/app/components/custom-pages/quiz/quiz.module').then(
            (m) => m.QuizModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('src/app/components/custom-pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'submission',
        loadChildren: () =>
          import('src/app/components/custom-pages/submission/submission.module').then(
            (m) => m.SubmissionModule
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('src/app/components/custom-pages/tasks/tasks.module').then(
            (m) => m.TasksModule
          ),
      },
      // end student

      // school_admin
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'admission',
        loadChildren: () =>
          import('../users/admission/admission.module').then(
            (m) => m.AdmissionModule
          ),
      },
      {
        path: 'enrollment',
        loadChildren: () =>
          import('../users/enrollment/enrollment.module').then(
            (m) => m.EnrollmentModule
          ),
      },

      // General Routes
      {
        path: 'media-manager',
        loadChildren: () =>
          import('../admin/media-manager/media-manager.module').then(
            (m) => m.MediaManagerModule
          ),
      },
      {
        path: 'media-manager/create',
        loadChildren: () =>
          import('../admin/media-manager/create/create.module').then(
            (m) => m.CreateModule
          ),
      },
      {
        path: 'media-manager/settings',
        loadChildren: () =>
          import('../admin/media-manager/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      // Users Routes
      {
        path: 'users/instructors',
        loadChildren: () =>
          import('../admin/users/instructors/instructors.module').then(
            (m) => m.InstructorsModule
          ),
      },
      {
        path: 'users/instructors/payout',
        loadChildren: () =>
          import('../admin/users/instructors/payout/payout.module').then(
            (m) => m.PayoutModule
          ),
      },
      {
        path: 'users/students',
        loadChildren: () =>
          import('../admin/users/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'users/staffs',
        loadChildren: () =>
          import('../admin/users/staffs/staffs.module').then(
            (m) => m.StaffsModule
          ),
      },
      {
        path: 'users/roles',
        loadChildren: () =>
          import('../admin/users/roles/roles.module').then((m) => m.RolesModule),
      },
      {
        path: 'users/delete-account-requests',
        loadChildren: () =>
          import(
            '../admin/users/delete-account-requests/delete-account-requests.module'
          ).then((m) => m.DeleteAccountRequestsModule),
      },

      // Departments Routes
      {
        path: 'departments',
        loadChildren: () =>
          import('../admin/departments/departments.module').then(
            (m) => m.DepartmentsModule
          ),
      },

      // Courses Routes
      {
        path: 'courses/categories',
        loadChildren: () =>
          import('../admin/courses/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'courses/levels',
        loadChildren: () =>
          import('../admin/courses/levels/levels.module').then(
            (m) => m.LevelsModule
          ),
      },
      {
        path: 'courses/settings',
        loadChildren: () =>
          import('../admin/courses/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'courses/subjects',
        loadChildren: () =>
          import('../admin/courses/subjects/subjects.module').then(
            (m) => m.SubjectsModule
          ),
      },

      // Quizzes Routes
      {
        path: 'quizzes/question-groups',
        loadChildren: () =>
          import('../admin/quizzes/question-groups/question-groups.module').then(
            (m) => m.QuestionGroupsModule
          ),
      },
      {
        path: 'quizzes/question-banks',
        loadChildren: () =>
          import('../admin/quizzes/question-banks/question-banks.module').then(
            (m) => m.QuestionBanksModule
          ),
      },
      {
        path: 'quizzes/setups',
        loadChildren: () =>
          import('../admin/quizzes/setups/setups.module').then(
            (m) => m.SetupsModule
          ),
      },
      {
        path: 'quizzes/results',
        loadChildren: () =>
          import('../admin/quizzes/results/results.module').then(
            (m) => m.ResultsModule
          ),
      },

      // Virtual Classes Routes
      {
        path: 'virtual-classes',
        loadChildren: () =>
          import('../admin/virtual-classes/virtual-classes.module').then(
            (m) => m.VirtualClassesModule
          ),
      },

      // Zoom Settings Routes
      {
        path: 'zoom-settings',
        loadChildren: () =>
          import('../admin/zoom-settings/zoom-settings.module').then(
            (m) => m.ZoomSettingsModule
          ),
      },

      // Certificates Routes
      {
        path: 'certificates',
        loadChildren: () =>
          import('../admin/certificates/certificates.module').then(
            (m) => m.CertificatesModule
          ),
      },
      {
        path: 'certificates/fonts',
        loadChildren: () =>
          import('../admin/certificates/fonts/fonts.module').then(
            (m) => m.FontsModule
          ),
      },
      {
        path: 'certificates/settings',
        loadChildren: () =>
          import('../admin/certificates/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      // Revenue Routes
      {
        path: 'revenue',
        loadChildren: () =>
          import('../admin/revenue/revenue.module').then((m) => m.RevenueModule),
      },
      {
        path: 'revenue/instructors',
        loadChildren: () =>
          import('../admin/revenue/instructors/instructors.module').then(
            (m) => m.InstructorsModule
          ),
      },
      {
        path: 'revenue/statistics',
        loadChildren: () =>
          import('../admin/revenue/statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },

      // Enrollments Routes
      {
        path: 'enrollments',
        loadChildren: () =>
          import('../admin/enrollments/enrollments.module').then(
            (m) => m.EnrollmentsModule
          ),
      },
      {
        path: 'enrollments/refund-n-cancellation',
        loadChildren: () =>
          import(
            '../admin/enrollments/refund-n-cancellation/refund-n-cancellation.module'
          ).then((m) => m.RefundNCancellationModule),
      },
      {
        path: 'enrollments/refund-settings',
        loadChildren: () =>
          import(
            '../admin/enrollments/refund-settings/refund-settings.module'
          ).then((m) => m.RefundSettingsModule),
      },

      // Communication Routes
      {
        path: 'communication/notifications',
        loadChildren: () =>
          import(
            '../admin/communication/notifications/notifications.module'
          ).then((m) => m.NotificationsModule),
      },
      {
        path: 'communication/private-messages',
        loadChildren: () =>
          import(
            '../admin/communication/private-messages/private-messages.module'
          ).then((m) => m.PrivateMessagesModule),
      },

      // Coupons Routes
      {
        path: 'coupons/manage',
        loadChildren: () =>
          import('../admin/coupons/manage/manage.module').then(
            (m) => m.ManageModule
          ),
      },
      {
        path: 'coupons/single',
        loadChildren: () =>
          import('../admin/coupons/single/single.module').then(
            (m) => m.SingleModule
          ),
      },
      {
        path: 'coupons/personalized',
        loadChildren: () =>
          import('../admin/coupons/personalized/personalized.module').then(
            (m) => m.PersonalizedModule
          ),
      },
      {
        path: 'coupons/invite-code',
        loadChildren: () =>
          import('../admin/coupons/invite-code/invite-code.module').then(
            (m) => m.InviteCodeModule
          ),
      },
      {
        path: 'coupons/invite-settings',
        loadChildren: () =>
          import('../admin/coupons/invite-settings/invite-settings.module').then(
            (m) => m.InviteSettingsModule
          ),
      },

      // Payment Routes
      {
        path: 'payment/online',
        loadChildren: () =>
          import('../admin/payment/online/online.module').then(
            (m) => m.OnlineModule
          ),
      },
      {
        path: 'payment/offline',
        loadChildren: () =>
          import('../admin/payment/offline/offline.module').then(
            (m) => m.OfflineModule
          ),
      },
      {
        path: 'payment/bank',
        loadChildren: () =>
          import('../admin/payment/bank/bank.module').then((m) => m.BankModule),
      },
      {
        path: 'payment/commission',
        loadChildren: () =>
          import('../admin/payment/commission/commission.module').then(
            (m) => m.CommissionModule
          ),
      },

      // Blogs Routes
      {
        path: 'blogs',
        loadChildren: () =>
          import('../admin/blogs/blogs.module').then((m) => m.BlogsModule),
      },
      {
        path: 'blogs/comments',
        loadChildren: () =>
          import('../admin/blogs/comments/comments.module').then(
            (m) => m.CommentsModule
          ),
      },

      // Questions Routes
      {
        path: 'questions',
        loadChildren: () =>
          import('../admin/questions/questions.module').then(
            (m) => m.QuestionsModule
          ),
      },
      {
        path: 'questions/settings',
        loadChildren: () =>
          import('../admin/questions/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      // CMO Routes
      {
        path: 'cmo/header-menu',
        loadChildren: () =>
          import('../admin/cmo/header-menu/header-menu.module').then(
            (m) => m.HeaderMenuModule
          ),
      },
      {
        path: 'cmo/menu-settings',
        loadChildren: () =>
          import('../admin/cmo/menu-settings/menu-settings.module').then(
            (m) => m.MenuSettingsModule
          ),
      },
      {
        path: 'cmo/sliders',
        loadChildren: () =>
          import('../admin/cmo/sliders/sliders.module').then(
            (m) => m.SlidersModule
          ),
      },
      {
        path: 'cmo/sliders/settings',
        loadChildren: () =>
          import('../admin/cmo/sliders/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'cmo/page-content',
        loadChildren: () =>
          import('../admin/cmo/page-content/page-content.module').then(
            (m) => m.PageContentModule
          ),
      },
      {
        path: 'cmo/testimonials',
        loadChildren: () =>
          import('../admin/cmo/testimonials/testimonials.module').then(
            (m) => m.TestimonialsModule
          ),
      },
      {
        path: 'cmo/social-settings',
        loadChildren: () =>
          import('../admin/cmo/social-settings/social-settings.module').then(
            (m) => m.SocialSettingsModule
          ),
      },
      {
        path: 'cmo/pages',
        loadChildren: () =>
          import('../admin/cmo/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'cmo/become-instructor',
        loadChildren: () =>
          import('../admin/cmo/become-instructor/become-instructor.module').then(
            (m) => m.BecomeInstructorModule
          ),
      },
      {
        path: 'cmo/sponsors',
        loadChildren: () =>
          import('../admin/cmo/sponsors/sponsors.module').then(
            (m) => m.SponsorsModule
          ),
      },
      {
        path: 'cmo/popup-content',
        loadChildren: () =>
          import('../admin/cmo/popup-content/popup-content.module').then(
            (m) => m.PopupContentModule
          ),
      },
      {
        path: 'cmo/footer-settings',
        loadChildren: () =>
          import('../admin/cmo/footer-settings/footer-settings.module').then(
            (m) => m.FooterSettingsModule
          ),
      },
      {
        path: 'cmo/login-page',
        loadChildren: () =>
          import('../admin/cmo/login-page/login-page.module').then(
            (m) => m.LoginPageModule
          ),
      },
      {
        path: 'cmo/faq',
        loadChildren: () =>
          import('../admin/cmo/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'cmo/header-footer-style',
        loadChildren: () =>
          import(
            '../admin/cmo/header-footer-style/header-footer-style.module'
          ).then((m) => m.HeaderFooterStyleModule),
      },

      // Gamification Routes
      {
        path: 'gamification',
        loadChildren: () =>
          import('../admin/gamification/gamification.module').then(
            (m) => m.GamificationModule
          ),
      },
      {
        path: 'gamification/badges',
        loadChildren: () =>
          import('../admin/gamification/badges/badges.module').then(
            (m) => m.BadgesModule
          ),
      },
      {
        path: 'gamification/history',
        loadChildren: () =>
          import('../admin/gamification/history/history.module').then(
            (m) => m.HistoryModule
          ),
      },

      // Settings Routes
      {
        path: 'settings/system',
        loadChildren: () =>
          import('../admin/settings/system/system.module').then(
            (m) => m.SystemModule
          ),
      },
      {
        path: 'settings/api',
        loadChildren: () =>
          import('../admin/settings/api/api.module').then((m) => m.ApiModule),
      },
      {
        path: 'settings/sms',
        loadChildren: () =>
          import('../admin/settings/sms/sms.module').then((m) => m.SmsModule),
      },
      {
        path: 'settings/vimeo',
        loadChildren: () =>
          import('../admin/settings/vimeo/vimeo.module').then(
            (m) => m.VimeoModule
          ),
      },
      {
        path: 'settings/vdocipher',
        loadChildren: () =>
          import('../admin/settings/vdocipher/vdocipher.module').then(
            (m) => m.VdocipherModule
          ),
      },
      {
        path: 'settings/localization',
        loadChildren: () =>
          import('../admin/settings/localization/localization.module').then(
            (m) => m.LocalizationModule
          ),
      },
      {
        path: 'settings/module-manager',
        loadChildren: () =>
          import('../admin/settings/module-manager/module-manager.module').then(
            (m) => m.ModuleManagerModule
          ),
      },
      {
        path: 'settings/sidebar-manager',
        loadChildren: () =>
          import(
            '../admin/settings/sidebar-manager/sidebar-manager.module'
          ).then((m) => m.SidebarManagerModule),
      },
      {
        path: 'settings/themes',
        loadChildren: () =>
          import('../admin/settings/themes/themes.module').then(
            (m) => m.ThemesModule
          ),
      },
      {
        path: 'settings/themes-customize',
        loadChildren: () =>
          import(
            '../admin/settings/themes-customize/themes-customize.module'
          ).then((m) => m.ThemesCustomizeModule),
      },
      {
        path: 'settings/themes-font',
        loadChildren: () =>
          import('../admin/settings/themes-font/themes-font.module').then(
            (m) => m.ThemesFontModule
          ),
      },
      {
        path: 'settings/newsletter',
        loadChildren: () =>
          import('../admin/settings/newsletter/newsletter.module').then(
            (m) => m.NewsletterModule
          ),
      },
      {
        path: 'settings/newsletter/mailchimp',
        loadChildren: () =>
          import('../admin/settings/newsletter/mailchimp/mailchimp.module').then(
            (m) => m.MailchimpModule
          ),
      },
      {
        path: 'settings/newsletter/get-response',
        loadChildren: () =>
          import(
            '../admin/settings/newsletter/get-response/get-response.module'
          ).then((m) => m.GetResponseModule),
      },
      {
        path: 'settings/newsletter/acelle',
        loadChildren: () =>
          import('../admin/settings/newsletter/acelle/acelle.module').then(
            (m) => m.AcelleModule
          ),
      },
      {
        path: 'settings/newsletter/subscriber',
        loadChildren: () =>
          import(
            '../admin/settings/newsletter/subscriber/subscriber.module'
          ).then((m) => m.SubscriberModule),
      },
      {
        path: 'settings/push-notification',
        loadChildren: () =>
          import(
            '../admin/settings/push-notification/push-notification.module'
          ).then((m) => m.PushNotificationModule),
      },
      {
        path: 'settings/utilities',
        loadChildren: () =>
          import('../admin/settings/utilities/utilities.module').then(
            (m) => m.UtilitiesModule
          ),
      },
      {
        path: 'settings/preloader',
        loadChildren: () =>
          import('../admin/settings/preloader/preloader.module').then(
            (m) => m.PreloaderModule
          ),
      },
      {
        path: 'settings/geo-location',
        loadChildren: () =>
          import('../admin/settings/geo-location/geo-location.module').then(
            (m) => m.GeoLocationModule
          ),
      },
      {
        path: 'settings/error-log',
        loadChildren: () =>
          import('../admin/settings/error-log/error-log.module').then(
            (m) => m.ErrorLogModule
          ),
      },
      {
        path: 'settings/ip-block',
        loadChildren: () =>
          import('../admin/settings/ip-block/ip-block.module').then(
            (m) => m.IpBlockModule
          ),
      },
      {
        path: 'settings/maintenance',
        loadChildren: () =>
          import('../admin/settings/maintenance/maintenance.module').then(
            (m) => m.MaintenanceModule
          ),
      },
      {
        path: 'settings/update-system',
        loadChildren: () =>
          import('../admin/settings/update-system/update-system.module').then(
            (m) => m.UpdateSystemModule
          ),
      },
      {
        path: 'settings/city',
        loadChildren: () =>
          import('../admin/settings/city/city.module').then((m) => m.CityModule),
      },
      {
        path: 'settings/cache',
        loadChildren: () =>
          import('../admin/settings/cache/cache.module').then(
            (m) => m.CacheModule
          ),
      },
      {
        path: 'settings/queue',
        loadChildren: () =>
          import('../admin/settings/queue/queue.module').then(
            (m) => m.QueueModule
          ),
      },
      {
        path: 'settings/cron-job',
        loadChildren: () =>
          import('../admin/settings/cron-job/cron-job.module').then(
            (m) => m.CronJobModule
          ),
      },
      {
        path: 'settings/captcha',
        loadChildren: () =>
          import('../admin/settings/captcha/captcha.module').then(
            (m) => m.CaptchaModule
          ),
      },
      {
        path: 'settings/social-login',
        loadChildren: () =>
          import('../admin/settings/social-login/social-login.module').then(
            (m) => m.SocialLoginModule
          ),
      },
      {
        path: 'settings/payout-accounts',
        loadChildren: () =>
          import(
            '../admin/settings/payout-accounts/payout-accounts.module'
          ).then((m) => m.PayoutAccountsModule),
      },
      {
        path: 'settings/cookie',
        loadChildren: () =>
          import('../admin/settings/cookie/cookie.module').then(
            (m) => m.CookieModule
          ),
      },
      {
        path: 'settings/analytics',
        loadChildren: () =>
          import('../admin/settings/analytics/analytics.module').then(
            (m) => m.AnalyticsModule
          ),
      },
      {
        path: 'settings/pusher',
        loadChildren: () =>
          import('../admin/settings/pusher/pusher.module').then(
            (m) => m.PusherModule
          ),
      },
      {
        path: 'settings/gdrive',
        loadChildren: () =>
          import('../admin/settings/gdrive/gdrive.module').then(
            (m) => m.GdriveModule
          ),
      },
      {
        path: 'settings/seo',
        loadChildren: () =>
          import('../admin/settings/seo/seo.module').then((m) => m.SeoModule),
      },
      {
        path: 'settings/currencies',
        loadChildren: () =>
          import('../admin/settings/currencies/currencies.module').then(
            (m) => m.CurrenciesModule
          ),
      },
      {
        path: 'settings/timezone',
        loadChildren: () =>
          import('../admin/settings/timezone/timezone.module').then(
            (m) => m.TimezoneModule
          ),
      },
      {
        path: 'settings/activation',
        loadChildren: () =>
          import('../admin/settings/activation/activation.module').then(
            (m) => m.ActivationModule
          ),
      },
      {
        path: 'settings/general',
        loadChildren: () =>
          import('../admin/settings/general/general.module').then(
            (m) => m.GeneralModule
          ),
      },
      {
        path: 'settings/email',
        loadChildren: () =>
          import('../admin/settings/email/email.module').then(
            (m) => m.EmailModule
          ),
      },
      {
        path: 'settings/email-template',
        loadChildren: () =>
          import('../admin/settings/email-template/email-template.module').then(
            (m) => m.EmailTemplateModule
          ),
      },
      {
        path: 'settings/payout',
        loadChildren: () =>
          import('../admin/settings/payout/payout.module').then(
            (m) => m.PayoutModule
          ),
      },
      {
        path: 'settings/backup',
        loadChildren: () =>
          import('../admin/settings/backup/backup.module').then(
            (m) => m.BackupModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurSidebarRoutingModule {}
