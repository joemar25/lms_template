export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }

  public static get dashboard(): string{
    return this.baseUrl + '/dashboard/'
  }

 
  // student routings 
 


  // end student routings
  // Instructor Routings


  public static get instructor(): string {
    return this.baseUrl + '/instructor/';
  }
  public static get instructor_dashboard(): string {
    return this.instructor + 'instructor-dashboard';
  }
  public static get dashboard_instructor(): string {
    return this.instructor + 'dashboard-instructor';
  }
  public static get instructor_chat(): string {
    return this.instructor + 'instructor-chat';
  }
  public static get instructor_deposit_dashboard(): string {
    return this.instructor + 'deposit-instructor-dashboard';
  }
  public static get instructor_list(): string {
    return this.instructor + 'instructor-view/instructor-list';
  }
  public static get instructor_grid(): string {
    return this.instructor + 'instructor-view/instructor-grid';
  }
  public static get instructor_course(): string {
    return this.instructor + 'instructor-course';
  }
  public static get instructor_reviews(): string {
    return this.instructor + 'instructor-reviews';
  }
  public static get instructor_student_grid(): string {
    return this.instructor + 'instructor-student-grid';
  }
  public static get instructor_student_list(): string {
    return this.instructor + 'instructor-student-list';
  }
  public static get instructor_earnings(): string {
    return this.instructor + 'instructor-earnings';
  }
  public static get instructor_orders(): string {
    return this.instructor + 'instructor-orders';
  }
  public static get instructor_payouts(): string {
    return this.instructor + 'instructor-payouts';
  }
  public static get instructor_new_tickets(): string {
    return this.instructor + 'instructor-new-tickets';
  }
  public static get instructor_tickets(): string {
    return this.instructor + 'instructor-tickets';
  }
  public static get instructor_edit_profile(): string {
    return this.instructor + 'instructor-edit-profile';
  }
  public static get instructor_security(): string {
    return this.instructor + 'instructor-security';
  }
  public static get instructor_social_profiles(): string {
    return this.instructor + 'instructor-social-profiles';
  }
  public static get instructor_notification(): string {
    return this.instructor + 'instructor-notification';
  }
  public static get instructor_profile_privacy(): string {
    return this.instructor + 'instructor-profile-privacy';
  }
  public static get instructor_delete_profile(): string {
    return this.instructor + 'instructor-delete-profile';
  }
  public static get instructor_linked_account(): string {
    return this.instructor + 'instructor-linked-account';
  }
  public static get instructor_instructor_profile(): string {
    return this.instructor + 'instructor-profile';
  }
  public static get instructor_withdrawal_instructor(): string {
    return this.instructor + 'withdrawal-instructor';
  }
  public static get instructor_deposit_instructor(): string {
    return this.instructor + 'deposit-instructor';
  }
  public static get instructor_transactions_instructor(): string {
    return this.instructor + 'transactions-instructor';
  }
  public static get instructorAnnouncements(): string {
    return this.instructor + 'instructor-announcements';
  }
  public static get instructorAssignment(): string {
    return this.instructor + 'instructor-assignment';
  }
  public static get instructorWishlist(): string {
    return this.instructor + 'instructor-wishlist';
  }
  public static get instructorChangePassword(): string {
    return this.instructor + 'settings/instructor-change-password';
  }
  public static get instructorSettings(): string {
    return this.instructor + 'settings/instructor-settings';
  }
  public static get instructorwithdraw(): string {
    return this.instructor + 'instructor-withdraw';
  }
  public static get instructorProfile(): string {
    return this.instructor + 'instructor-profile';
  }
  public static get instructorQA(): string {
    return this.instructor + 'instructor-qa';
  }
  public static get instructorQuiz(): string {
    return this.instructor + 'instructor-quiz';
  }
  public static get instructorQuizAttempts(): string {
    return this.instructor + 'instructor-quiz-attempts';
  }
  public static get instructorQuizAttemptsDetails(): string {
    return this.instructor + 'instructor-quiz-attempts-details';
  }
  public static get instructorSettingNotifications(): string {
    return this.instructor + 'settings/instructor-setting-notifications';
  }
  public static get instructorReferral(): string {
    return this.instructor + 'instructor-referral';
  }
  public static get instructorDeleteAccount(): string {
    return this.instructor + 'settings/instructor-delete-account';
  }
  public static get instructorCourse(): string {
    return this.instructor + 'instructor-course';
  }
  public static get instructorDetails(): string {
    return this.instructor + 'instructor-details';
  }
  public static get instructorEnrolledCourse(): string {
    return this.instructor + 'instructor-enrolled-course';
  }
  public static get instructorQuizDetails(): string {
    return this.instructor + 'instructor-quiz-details';
  }
  public static get instructorSettingWithdraw(): string {
    return this.instructor + 'settings/instructor-setting-withdraw';
  }

  // Student Routings

  public static get students(): string {
    return this.baseUrl + '/student/';
  }

  public static get students_list(): string {
    return this.students + 'student-view/students-list';
  }
  public static get students_grid(): string {
    return this.students + 'student-view/students-grid';
  }
  public static get students_edit_profile(): string {
    return this.students + 'setting-edit-profile';
  }
  public static get students_profile(): string {
    return this.students + 'student-profile';
  }
  public static get deposit_student_dashboard(): string {
    return this.students + 'deposit-student-dashboard';
  }
  public static get deposit_student(): string {
    return this.students + 'deposit-student';
  }
  public static get course_student(): string {
    return this.students + 'course-student';
  }
  public static get view_invoice_student(): string {
    return this.students + 'view-invoice';
  }
  public static get transactions_student(): string {
    return this.students + 'transactions-student';
  }
  public static get students_security(): string {
    return this.students + 'setting-student-security';
  }
  public static get students_social_profile(): string {
    return this.students + 'settings/student-social-profile';
  }
  public static get students_notification(): string {
    return this.students + 'setting-student-notification';
  }
  public static get students_privacy(): string {
    return this.students + 'setting-student-privacy';
  }
  public static get students_delete(): string {
    return this.students + 'setting-student-delete-profile';
  }
  public static get students_accounts(): string {
    return this.students + 'setting-student-accounts';
  }
  public static get students_referral(): string {
    return this.students + 'student-referral';
  }
  public static get students_subscription(): string {
    return this.students + 'setting-student-subscription';
  }
  public static get students_billing(): string {
    return this.students + 'setting-student-billing';
  }
  public static get students_payments(): string {
    return this.students + 'setting-student-payment';
  }
  public static get students_invoice(): string {
    return this.students + 'setting-student-invoice';
  }
  public static get students_tickets(): string {
    return this.students + 'student-tickets';
  }
  public static get studentDashboard(): string {
    return this.students + 'student-dashboard';
  }
  public static get studentsMessage(): string {
    return this.students + 'student-message';
  }
  public static get studentsQA(): string {
    return this.students + 'student-qa';
  }
  public static get studentsQuiz(): string {
    return this.students + 'student-quiz';
  }

  public static get studentLinkedAccount(): string {
    return this.students + 'settings/student-linked-accounts';
  }
  public static get studentNotification(): string {
    return this.students + 'settings/student-notifications';
  }
  public static get studentOrderHistory(): string {
    return this.students + 'student-order-history';
  }
  public static get studentWishlist(): string {
    return this.students + 'student-wishlist';
  }
  public static get studentCourses(): string {
    return this.students + 'student-courses';
  }
  public static get studentReviews(): string {
    return this.students + 'student-reviews';
  }

  public static get studentChangePassword(): string {
    return this.students + 'settings/student-change-password';
  }
  public static get studentProfile(): string {
    return this.students + 'student-profile';
  }
  public static get studentMessages(): string {
    return this.students + 'student-message';
  }
  public static get studentSettings(): string {
    return this.students + '/settings/student-settings';
  }

  public static get studentQuizDetails(): string {
    return this.students + 'student-quiz-details';
  }
  public static get studentQuiz(): string {
    return this.students + 'student-quiz';
  }

  // Pages Routing

  public static get pages(): string {
    return this.baseUrl + '/pages/';
  }
  public static get page_notifications(): string {
    return this.pages + 'notifications';
  }
  public static get page_pricing_plan(): string {
    return this.pages + 'pricing-plan';
  }
  public static get page_wishlist(): string {
    return this.pages + 'wishlist';
  }
  public static get page_faq(): string {
    return this.pages + 'faq';
  }
  public static get page_support(): string {
    return this.pages + 'support';
  }
  public static get page_job_category(): string {
    return this.pages + 'job-category';
  }
  public static get page_cart(): string {
    return this.pages + 'cart';
  }
  public static get page_checkout(): string {
    return this.pages + 'checkout';
  }
  public static get page_purchase_history(): string {
    return this.pages + 'purchase-history';
  }
  public static get page_course_details(): string {
    return this.pages + 'course/course-details';
  }
  public static get page_course_message(): string {
    return this.pages + 'course/course-message';
  }
  public static get page_course_course_lesson(): string {
    return this.pages + 'course/course-lesson';
  }
  public static get page_course_grid(): string {
    return this.pages + 'course/course-grid';
  }
  public static get page_course_course_wishlist(): string {
    return this.pages + 'course/course-wishlist';
  }
  public static get page_course_list(): string {
    return this.pages + 'course/course-list';
  }
  public static get page_add_course(): string {
    return this.pages + 'course/add-course';
  }
  public static get page_term_condition(): string {
    return this.pages + 'term-condition';
  }
  public static get page_privacy_policy(): string {
    return this.pages + 'privacy-policy';
  }
  public static get page_verification_code(): string {
    return this.pages + 'verification-code';
  }
  public static get helpCenter(): string {
    return this.pages + 'help-center';
  }

  // Blog routes

  public static get blog(): string {
    return this.baseUrl + '/blog/';
  }
  public static get blog_details(): string {
    return this.blog + 'blog-details';
  }
  public static get blog_modern(): string {
    return this.blog + 'blog-modern';
  }
  public static get blog_masonry(): string {
    return this.blog + 'blog-masonry';
  }
  public static get blog_grid(): string {
    return this.blog + 'blog-grid';
  }
  public static get blog_list(): string {
    return this.blog + 'blog-list';
  }

  // Auth Routes


  public static get auth(): string {
    return this.baseUrl + '/auth/';
  }
  public static get forgot_password(): string {
    return this.auth + 'forgot-password';
  }
  public static get login(): string {
    return this.auth + 'login';
  }
  public static get register(): string {
    return this.auth + 'register-page/register';
  }
  public static get register3(): string {
    return this.auth + 'register-page/register-step-three';
  }
  public static get register2(): string {
    return this.auth + 'register-page/register-step-two';
  }
  public static get register5(): string {
    return this.auth + 'register-page/register-step-five';
  }
  public static get register1(): string {
    return this.auth + 'register-page/register-step-one';
  }

  //custom-pages routes
  
 

  // Error Routes

  public static get error(): string {
    return this.baseUrl + '/error/';
  }
  public static get under_construction(): string {
    return this.error + 'under-construction';
  }
  public static get error_500(): string {
    return this.error + '500';
  }
  public static get coming_soon(): string {
    return this.error + 'come-soon';
  }
  public static get error_404(): string {
    return this.error + '404';
  }

  // Home Routes

  public static get home(): string {
    return this.baseUrl + '/home';
  }
  public static get home2(): string {
    return this.baseUrl + '/home-two';
  }
  public static get home3(): string {
    return this.baseUrl + '/home-three';
  }
  public static get home4(): string {
    return this.baseUrl + '/home-four';
  }

  // Admin Dashboard Routes

  
  

  //student-information



// end student-information

  public static get users_dashboard(): string {
    return this.baseUrl + '/dashboard';
  }


 public static get assessments(): string {
  return this.users_dashboard + '/assessments';
}

public static get attendance(): string {
  return this.users_dashboard + '/attendance';
}

public static get clearance(): string {
  return this.users_dashboard + '/clearance';
}

public static get document_management(): string {
  return this.users_dashboard + '/document-management';
}

public static get kiosk(): string {
  return this.users_dashboard + '/kiosk';
}

public static get queuing(): string {
  return this.users_dashboard + '/queuing';
}

public static get schedules(): string {
  return this.users_dashboard + '/schedules';
}

public static get scholarships(): string {
  return this.users_dashboard + '/scholarships';
}


public static get class_records(): string {
  return this.users_dashboard + '/class-records';
}


public static get grades(): string {
  return this.users_dashboard + '/grades';
}


public static get report_generation(): string {
  return this.users_dashboard + '/report-generation';
}

  public static get admission(): string {
    return this.users_dashboard + '/admission';
  }

  public static get mentors(): string {
    return this.users_dashboard + '/mentors';
  }


  public static get tasks(): string {
    return this.users_dashboard + '/tasks';
  }
  
  public static get calendar(): string {
    return this.users_dashboard + '/calendar';
  }

  public static get absences(): string {
    return this.users_dashboard + '/absences';
  }

  public static get curriculum(): string {
    return this.users_dashboard + '/curriculum';
  }

  public static get teacher(): string {
    return this.users_dashboard + '/teacher';
  }

  public static get notification(): string {
    return this.users_dashboard + '/notification';
  }

  public static get classes(): string {
    return this.users_dashboard + '/cls';
  }



  public static get courses(): string {
    return this.users_dashboard + '/c';
  }

  public static get course_details(): string {
    return this.courses + '/details';
  }

  public static get message(): string {
    return this.users_dashboard + '/message';
  }

  public static get quiz(): string {
    return this.users_dashboard + '/quiz';
  }
  
  public static get settings(): string {
    return this.users_dashboard + '/settings';
  }

  public static get submission(): string {
    return this.users_dashboard + '/submission';
  }


  public static get enrollment(): string {
    return this.users_dashboard + '/enrollment';
  }




  public static get admin_dashboard(): string {
    return this.baseUrl + '/dashboard';
  }

  public static get media_manager(): string {
    return this.admin_dashboard + '/media-manager';
  }

  public static get media_manager_create(): string {
    return this.admin_dashboard + '/media-manager/create';
  }

  public static get media_manager_settings(): string {
    return this.admin_dashboard + '/media-manager/settings';
  }

  public static get users_instructors(): string {
    return this.admin_dashboard + '/users/instructors';
  }

  public static get users_instructors_payout(): string {
    return this.admin_dashboard + '/users/instructors/payout';
  }

  public static get users_students(): string {
    return this.admin_dashboard + '/users/students';
  }

  public static get users_staffs(): string {
    return this.admin_dashboard + '/users/staffs';
  }

  public static get users_roles(): string {
    return this.admin_dashboard + '/users/roles';
  }

  public static get users_delete_account_requests(): string {
    return this.admin_dashboard + '/users/delete-account-requests';
  }

  public static get departments(): string {
    return this.admin_dashboard + '/departments';
  }

  public static get courses_categories(): string {
    return this.admin_dashboard + '/courses/categories';
  }

  public static get courses_levels(): string {
    return this.admin_dashboard + '/courses/levels';
  }

  public static get courses_settings(): string {
    return this.admin_dashboard + '/courses/settings';
  }

  public static get courses_subjects(): string {
    return this.admin_dashboard + '/courses/subjects';
  }

  public static get quizzes_question_groups(): string {
    return this.admin_dashboard + '/quizzes/question-groups';
  }

  public static get quizzes_question_banks(): string {
    return this.admin_dashboard + '/quizzes/question-banks';
  }

  public static get quizzes_setups(): string {
    return this.admin_dashboard + '/quizzes/setups';
  }

  public static get quizzes_results(): string {
    return this.admin_dashboard + '/quizzes/results';
  }

  public static get virtual_classes(): string {
    return this.admin_dashboard + '/virtual-classes';
  }

  public static get zoom_settings(): string {
    return this.admin_dashboard + '/zoom-settings';
  }

  public static get certificates(): string {
    return this.admin_dashboard + '/certificates';
  }

  public static get certificates_fonts(): string {
    return this.admin_dashboard + '/certificates/fonts';
  }

  public static get certificates_settings(): string {
    return this.admin_dashboard + '/certificates/settings';
  }

  public static get revenue(): string {
    return this.admin_dashboard + '/revenue';
  }

  public static get revenue_instructors(): string {
    return this.admin_dashboard + '/revenue/instructors';
  }

  public static get revenue_statistics(): string {
    return this.admin_dashboard + '/revenue/statistics';
  }

  public static get enrollments(): string {
    return this.admin_dashboard + '/enrollments';
  }

  public static get enrollments_refund_n_cancellation(): string {
    return this.admin_dashboard + '/enrollments/refund-n-cancellation';
  }

  public static get enrollments_refund_settings(): string {
    return this.admin_dashboard + '/enrollments/refund-settings';
  }

  public static get communication_notifications(): string {
    return this.admin_dashboard + '/communication/notifications';
  }

  public static get communication_private_messages(): string {
    return this.admin_dashboard + '/communication/private-messages';
  }

  public static get coupons_manage(): string {
    return this.admin_dashboard + '/coupons/manage';
  }

  public static get coupons_single(): string {
    return this.admin_dashboard + '/coupons/single';
  }

  public static get coupons_personalized(): string {
    return this.admin_dashboard + '/coupons/personalized';
  }

  public static get coupons_invite_code(): string {
    return this.admin_dashboard + '/coupons/invite-code';
  }

  public static get coupons_invite_settings(): string {
    return this.admin_dashboard + '/coupons/invite-settings';
  }

  public static get payment_online(): string {
    return this.admin_dashboard + '/payment/online';
  }

  public static get payment_offline(): string {
    return this.admin_dashboard + '/payment/offline';
  }

  public static get payment_bank(): string {
    return this.admin_dashboard + '/payment/bank';
  }

  public static get payment_commission(): string {
    return this.admin_dashboard + '/payment/commission';
  }

  public static get blogs(): string {
    return this.admin_dashboard + '/blogs';
  }

  public static get blogs_comments(): string {
    return this.admin_dashboard + '/blogs/comments';
  }

  public static get questions(): string {
    return this.admin_dashboard + '/questions';
  }

  public static get questions_settings(): string {
    return this.admin_dashboard + '/questions/settings';
  }

  public static get cmo_header_menu(): string {
    return this.admin_dashboard + '/cmo/header-menu';
  }

  public static get cmo_menu_settings(): string {
    return this.admin_dashboard + '/cmo/menu-settings';
  }

  public static get cmo_sliders(): string {
    return this.admin_dashboard + '/cmo/sliders';
  }

  public static get cmo_sliders_settings(): string {
    return this.admin_dashboard + '/cmo/sliders/settings';
  }

  public static get cmo_page_content(): string {
    return this.admin_dashboard + '/cmo/page-content';
  }

  public static get cmo_testimonials(): string {
    return this.admin_dashboard + '/cmo/testimonials';
  }

  public static get cmo_social_settings(): string {
    return this.admin_dashboard + '/cmo/social-settings';
  }

  public static get cmo_pages(): string {
    return this.admin_dashboard + '/cmo/pages';
  }

  public static get cmo_become_instructor(): string {
    return this.admin_dashboard + '/cmo/become-instructor';
  }

  public static get cmo_sponsors(): string {
    return this.admin_dashboard + '/cmo/sponsors';
  }

  public static get cmo_popup_content(): string {
    return this.admin_dashboard + '/cmo/popup-content';
  }

  public static get cmo_footer_settings(): string {
    return this.admin_dashboard + '/cmo/footer-settings';
  }

  public static get cmo_login_page(): string {
    return this.admin_dashboard + '/cmo/login-page';
  }

  public static get cmo_faq(): string {
    return this.admin_dashboard + '/cmo/faq';
  }

  public static get cmo_header_footer_style(): string {
    return this.admin_dashboard + '/cmo/header-footer-style';
  }

  public static get gamification(): string {
    return this.admin_dashboard + '/gamification';
  }

  public static get gamification_badges(): string {
    return this.admin_dashboard + '/gamification/badges';
  }

  public static get gamification_history(): string {
    return this.admin_dashboard + '/gamification/history';
  }

  public static get settings_system(): string {
    return this.admin_dashboard + '/settings/system';
  }

  public static get settings_api(): string {
    return this.admin_dashboard + '/settings/api';
  }

  public static get settings_sms(): string {
    return this.admin_dashboard + '/settings/sms';
  }

  public static get settings_vimeo(): string {
    return this.admin_dashboard + '/settings/vimeo';
  }

  public static get settings_vdocipher(): string {
    return this.admin_dashboard + '/settings/vdocipher';
  }

  public static get settings_localization(): string {
    return this.admin_dashboard + '/settings/localization';
  }

  public static get settings_module_manager(): string {
    return this.admin_dashboard + '/settings/module-manager';
  }

  public static get settings_sidebar_manager(): string {
    return this.admin_dashboard + '/settings/sidebar-manager';
  }

  public static get settings_themes(): string {
    return this.admin_dashboard + '/settings/themes';
  }

  public static get settings_themes_customize(): string {
    return this.admin_dashboard + '/settings/themes-customize';
  }

  public static get settings_themes_font(): string {
    return this.admin_dashboard + '/settings/themes-font';
  }

  public static get settings_newsletter(): string {
    return this.admin_dashboard + '/settings/newsletter';
  }

  public static get settings_newsletter_mailchimp(): string {
    return this.admin_dashboard + '/settings/newsletter/mailchimp';
  }

  public static get settings_newsletter_get_response(): string {
    return this.admin_dashboard + '/settings/newsletter/get-response';
  }

  public static get settings_newsletter_acelle(): string {
    return this.admin_dashboard + '/settings/newsletter/acelle';
  }

  public static get settings_newsletter_subscriber(): string {
    return this.admin_dashboard + '/settings/newsletter/subscriber';
  }

  public static get settings_push_notification(): string {
    return this.admin_dashboard + '/settings/push-notification';
  }

  public static get settings_utilities(): string {
    return this.admin_dashboard + '/settings/utilities';
  }

  public static get settings_preloader(): string {
    return this.admin_dashboard + '/settings/preloader';
  }

  public static get settings_geo_location(): string {
    return this.admin_dashboard + '/settings/geo-location';
  }

  public static get settings_error_log(): string {
    return this.admin_dashboard + '/settings/error-log';
  }

  public static get settings_ip_block(): string {
    return this.admin_dashboard + '/settings/ip-block';
  }

  public static get settings_maintenance(): string {
    return this.admin_dashboard + '/settings/maintenance';
  }

  public static get settings_update_system(): string {
    return this.admin_dashboard + '/settings/update-system';
  }

  public static get settings_city(): string {
    return this.admin_dashboard + '/settings/city';
  }

  public static get settings_cache(): string {
    return this.admin_dashboard + '/settings/cache';
  }

  public static get settings_queue(): string {
    return this.admin_dashboard + '/settings/queue';
  }

  public static get settings_cron_job(): string {
    return this.admin_dashboard + '/settings/cron-job';
  }

  public static get settings_captcha(): string {
    return this.admin_dashboard + '/settings/captcha';
  }

  public static get settings_social_login(): string {
    return this.admin_dashboard + '/settings/social-login';
  }

  public static get settings_payout_accounts(): string {
    return this.admin_dashboard + '/settings/payout-accounts';
  }

  public static get settings_cookie(): string {
    return this.admin_dashboard + '/settings/cookie';
  }

  public static get settings_analytics(): string {
    return this.admin_dashboard + '/settings/analytics';
  }

  public static get settings_pusher(): string {
    return this.admin_dashboard + '/settings/pusher';
  }

  public static get settings_gdrive(): string {
    return this.admin_dashboard + '/settings/gdrive';
  }

  public static get settings_seo(): string {
    return this.admin_dashboard + '/settings/seo';
  }

  public static get settings_currencies(): string {
    return this.admin_dashboard + '/settings/currencies';
  }

  public static get settings_timezone(): string {
    return this.admin_dashboard + '/settings/timezone';
  }

  public static get settings_activation(): string {
    return this.admin_dashboard + '/settings/activation';
  }

  public static get settings_general(): string {
    return this.admin_dashboard + '/settings/general';
  }

  public static get settings_email(): string {
    return this.admin_dashboard + '/settings/email';
  }

  public static get settings_email_template(): string {
    return this.admin_dashboard + '/settings/email-template';
  }

  public static get settings_payout(): string {
    return this.admin_dashboard + '/settings/payout';
  }

  public static get settings_backup(): string {
    return this.admin_dashboard + '/settings/backup';
  }

  public static get student_list(): string {
    return this.admin_dashboard + '/enrollments/student-list';
  }

}
