# Structure

[Conversation](https://chatgpt.com/share/acb1d3d3-6d72-4c49-8176-9cc448cf0aea)

## admin routes

dashboard
├── admin
│   ├── blogs
│   │   ├── comments
│   ├── communication
│   │   ├── notifications
│   │   ├── private-messages
│   ├── courses
│   │   ├── categories
│   │   ├── levels
│   │   ├── settings
│   │   ├── subjects
│   ├── cmo
│   │   ├── become-instructor
│   │   ├── faq
│   │   ├── footer-settings
│   │   ├── header-footer-style
│   │   ├── header-menu
│   │   ├── login-page
│   │   ├── menu-settings
│   │   ├── page-content
│   │   ├── pages
│   │   ├── popup-content
│   │   ├── sliders
│   │   │   ├── settings
│   │   ├── social-settings
│   │   ├── sponsors
│   │   ├── testimonials
│   ├── coupons
│   │   ├── invite-code
│   │   ├── invite-settings
│   │   ├── manage
│   │   ├── personalized
│   │   ├── single
│   ├── departments
│   ├── enrollments
│   │   ├── refund-n-cancellation
│   │   ├── refund-settings
│   ├── gamification
│   │   ├── badges
│   │   ├── history
│   ├── media-manager (create-retrieve-delete)
│   │   ├── settings
│   ├── payment
│   │   ├── bank
│   │   ├── commission
│   │   ├── offline
│   │   ├── online
│   ├── questions
│   │   ├── settings
│   ├── quizzes
│   │   ├── question-banks
│   │   ├── question-groups
│   │   ├── results
│   │   ├── setups
│   ├── revenue
│   │   ├── instructors
│   │   ├── statistics
│   ├── settings
│   │   ├── activation
│   │   ├── analytics
│   │   ├── api
│   │   ├── backup
│   │   ├── cache
│   │   ├── captcha
│   │   ├── city
│   │   ├── cookie
│   │   ├── cron-job
│   │   ├── currencies
│   │   ├── email
│   │   ├── email-template
│   │   ├── error-log
│   │   ├── general
│   │   ├── geo-location
│   │   ├── gdrive
│   │   ├── ip-block
│   │   ├── localization
│   │   ├── maintenance
│   │   ├── module-manager
│   │   ├── newsletter
│   │   │   ├── acelle
│   │   │   ├── get-response
│   │   │   ├── mailchimp
│   │   │   ├── subscriber
│   │   ├── payout
│   │   ├── payout-accounts
│   │   ├── preloader
│   │   ├── push-notification
│   │   ├── pusher
│   │   ├── queue
│   │   ├── seo
│   │   ├── sidebar-manager
│   │   ├── sms
│   │   ├── social-login
│   │   ├── system
│   │   ├── themes
│   │   │   ├── themes-customize
│   │   │   ├── themes-font
│   │   ├── timezone
│   │   ├── update-system
│   │   ├── utilities
│   │   ├── vdocipher
│   │   ├── vimeo
│   ├── users
│   │   ├── delete-account-requests
│   │   ├── instructors
│   │   │   ├── payout
│   │   ├── roles
│   │   ├── staffs
│   │   ├── students
│   ├── virtual-classes
├───├─── zoom-settings

## admin routing generation

ng g module dashboard --routing; ng g component dashboard


ng g module dashboard/admin/media-manager --routing; ng g component dashboard/admin/media-manager
ng g module dashboard/admin/media-manager/create --routing; ng g component dashboard/admin/media-manager/create
ng g module dashboard/admin/media-manager/settings --routing; ng g component dashboard/admin/media-manager/settings

ng g module dashboard/admin/users/instructors --routing; ng g component dashboard/admin/users/instructors
ng g module dashboard/admin/users/instructors/payout --routing; ng g component dashboard/admin/users/instructors/payout
ng g module dashboard/admin/users/students --routing; ng g component dashboard/admin/users/students
ng g module dashboard/admin/users/staffs --routing; ng g component dashboard/admin/users/staffs
ng g module dashboard/admin/users/roles --routing; ng g component dashboard/admin/users/roles
ng g module dashboard/admin/users/delete-account-requests --routing; ng g component dashboard/admin/users/delete-account-requests

ng g module dashboard/admin/departments --routing; ng g component dashboard/admin/departments

ng g module dashboard/admin/courses/categories --routing; ng g component dashboard/admin/courses/categories
ng g module dashboard/admin/courses/levels --routing; ng g component dashboard/admin/courses/levels
ng g module dashboard/admin/courses/settings --routing; ng g component dashboard/admin/courses/settings
ng g module dashboard/admin/courses/subjects --routing; ng g component dashboard/admin/courses/subjects

ng g module dashboard/admin/quizzes/question-groups --routing; ng g component dashboard/admin/quizzes/question-groups
ng g module dashboard/admin/quizzes/question-banks --routing; ng g component dashboard/admin/quizzes/question-banks
ng g module dashboard/admin/quizzes/setups --routing; ng g component dashboard/admin/quizzes/setups
ng g module dashboard/admin/quizzes/results --routing; ng g component dashboard/admin/quizzes/results

ng g module dashboard/admin/virtual-classes --routing; ng g component dashboard/admin/virtual-classes

ng g module dashboard/admin/zoom-settings --routing; ng g component dashboard/admin/zoom-settings

ng g module dashboard/admin/certificates --routing; ng g component dashboard/admin/certificates
ng g module dashboard/admin/certificates/fonts --routing; ng g component dashboard/admin/certificates/fonts
ng g module dashboard/admin/certificates/settings --routing; ng g component dashboard/admin/certificates/settings

ng g module dashboard/admin/revenue --routing; ng g component dashboard/admin/revenue
ng g module dashboard/admin/revenue/instructors --routing; ng g component dashboard/admin/revenue/instructors
ng g module dashboard/admin/revenue/statistics --routing; ng g component dashboard/admin/revenue/statistics

ng g module dashboard/admin/enrollments --routing; ng g component dashboard/admin/enrollments
ng g module dashboard/admin/enrollments/refund-n-cancellation --routing; ng g component dashboard/admin/enrollments/refund-n-cancellation
ng g module dashboard/admin/enrollments/refund-settings --routing; ng g component dashboard/admin/enrollments/refund-settings

ng g module dashboard/admin/communication/notifications --routing; ng g component dashboard/admin/communication/notifications
ng g module dashboard/admin/communication/private-messages --routing; ng g component dashboard/admin/communication/private-messages

ng g module dashboard/admin/coupons/manage --routing; ng g component dashboard/admin/coupons/manage
ng g module dashboard/admin/coupons/single --routing; ng g component dashboard/admin/coupons/single
ng g module dashboard/admin/coupons/personalized --routing; ng g component dashboard/admin/coupons/personalized
ng g module dashboard/admin/coupons/invite-code --routing; ng g component dashboard/admin/coupons/invite-code
ng g module dashboard/admin/coupons/invite-settings --routing; ng g component dashboard/admin/coupons/invite-settings

ng g module dashboard/admin/payment/online --routing; ng g component dashboard/admin/payment/online
ng g module dashboard/admin/payment/offline --routing; ng g component dashboard/admin/payment/offline
ng g module dashboard/admin/payment/bank --routing; ng g component dashboard/admin/payment/bank
ng g module dashboard/admin/payment/commission --routing; ng g component dashboard/admin/payment/commission

ng g module dashboard/admin/blogs --routing; ng g component dashboard/admin/blogs
ng g module dashboard/admin/blogs/comments --routing; ng g component dashboard/admin/blogs/comments

ng g module dashboard/admin/questions --routing; ng g component dashboard/admin/questions
ng g module dashboard/admin/questions/settings --routing; ng g component dashboard/admin/questions/settings

ng g module dashboard/admin/cmo/header-menu --routing; ng g component dashboard/admin/cmo/header-menu
ng g module dashboard/admin/cmo/menu-settings --routing; ng g component dashboard/admin/cmo/menu-settings
ng g module dashboard/admin/cmo/sliders --routing; ng g component dashboard/admin/cmo/sliders
ng g module dashboard/admin/cmo/sliders/settings --routing; ng g component dashboard/admin/cmo/sliders/settings
ng g module dashboard/admin/cmo/page-content --routing; ng g component dashboard/admin/cmo/page-content
ng g module dashboard/admin/cmo/testimonials --routing; ng g component dashboard/admin/cmo/testimonials
ng g module dashboard/admin/cmo/social-settings --routing; ng g component dashboard/admin/cmo/social-settings
ng g module dashboard/admin/cmo/pages --routing; ng g component dashboard/admin/cmo/pages
ng g module dashboard/admin/cmo/become-instructor --routing; ng g component dashboard/admin/cmo/become-instructor
ng g module dashboard/admin/cmo/sponsors --routing; ng g component dashboard/admin/cmo/sponsors
ng g module dashboard/admin/cmo/popup-content --routing; ng g component dashboard/admin/cmo/popup-content
ng g module dashboard/admin/cmo/footer-settings --routing; ng g component dashboard/admin/cmo/footer-settings
ng g module dashboard/admin/cmo/login-page --routing; ng g component dashboard/admin/cmo/login-page
ng g module dashboard/admin/cmo/faq --routing; ng g component dashboard/admin/cmo/faq
ng g module dashboard/admin/cmo/header-footer-style --routing; ng g component dashboard/admin/cmo/header-footer-style

ng g module dashboard/admin/gamification --routing; ng g component dashboard/admin/gamification
ng g module dashboard/admin/gamification/badges --routing; ng g component dashboard/admin/gamification/badges
ng g module dashboard/admin/gamification/history --routing; ng g component dashboard/admin/gamification/history

ng g module dashboard/admin/settings/system --routing; ng g component dashboard/admin/settings/system
ng g module dashboard/admin/settings/api --routing; ng g component dashboard/admin/settings/api
ng g module dashboard/admin/settings/sms --routing; ng g component dashboard/admin/settings/sms
ng g module dashboard/admin/settings/vimeo --routing; ng g component dashboard/admin/settings/vimeo
ng g module dashboard/admin/settings/vdocipher --routing; ng g component dashboard/admin/settings/vdocipher
ng g module dashboard/admin/settings/localization --routing; ng g component dashboard/admin/settings/localization
ng g module dashboard/admin/settings/module-manager --routing; ng g component dashboard/admin/settings/module-manager
ng g module dashboard/admin/settings/sidebar-manager --routing; ng g component dashboard/admin/settings/sidebar-manager
ng g module dashboard/admin/settings/themes --routing; ng g component dashboard/admin/settings/themes
ng g module dashboard/admin/settings/themes-customize --routing; ng g component dashboard/admin/settings/themes-customize
ng g module dashboard/admin/settings/themes-font --routing; ng g component dashboard/admin/settings/themes-font
ng g module dashboard/admin/settings/newsletter --routing; ng g component dashboard/admin/settings/newsletter
ng g module dashboard/admin/settings/newsletter/mailchimp --routing; ng g component dashboard/admin/settings/newsletter/mailchimp
ng g module dashboard/admin/settings/newsletter/get-response --routing; ng g component dashboard/admin/settings/newsletter/get-response
ng g module dashboard/admin/settings/newsletter/acelle --routing; ng g component dashboard/admin/settings/newsletter/acelle
ng g module dashboard/admin/settings/newsletter/subscriber --routing; ng g component dashboard/admin/settings/newsletter/subscriber
ng g module dashboard/admin/settings/push-notification --routing; ng g component dashboard/admin/settings/push-notification
ng g module dashboard/admin/settings/utilities --routing; ng g component dashboard/admin/settings/utilities
ng g module dashboard/admin/settings/preloader --routing; ng g component dashboard/admin/settings/preloader
ng g module dashboard/admin/settings/geo-location --routing; ng g component dashboard/admin/settings/geo-location
ng g module dashboard/admin/settings/error-log --routing; ng g component dashboard/admin/settings/error-log
ng g module dashboard/admin/settings/ip-block --routing; ng g component dashboard/admin/settings/ip-block
ng g module dashboard/admin/settings/maintenance --routing; ng g component dashboard/admin/settings/maintenance
ng g module dashboard/admin/settings/update-system --routing; ng g component dashboard/admin/settings/update-system
ng g module dashboard/admin/settings/city --routing; ng g component dashboard/admin/settings/city
ng g module dashboard/admin/settings/cache --routing; ng g component dashboard/admin/settings/cache
ng g module dashboard/admin/settings/queue --routing; ng g component dashboard/admin/settings/queue
ng g module dashboard/admin/settings/cron-job --routing; ng g component dashboard/admin/settings/cron-job
ng g module dashboard/admin/settings/captcha --routing; ng g component dashboard/admin/settings/captcha
ng g module dashboard/admin/settings/social-login --routing; ng g component dashboard/admin/settings/social-login
ng g module dashboard/admin/settings/payout-accounts --routing; ng g component dashboard/admin/settings/payout-accounts
ng g module dashboard/admin/settings/cookie --routing; ng g component dashboard/admin/settings/cookie
ng g module dashboard/admin/settings/analytics --routing; ng g component dashboard/admin/settings/analytics
ng g module dashboard/admin/settings/pusher --routing; ng g component dashboard/admin/settings/pusher
ng g module dashboard/admin/settings/gdrive --routing; ng g component dashboard/admin/settings/gdrive
ng g module dashboard/admin/settings/seo --routing; ng g component dashboard/admin/settings/seo
ng g module dashboard/admin/settings/currencies --routing; ng g component dashboard/admin/settings/currencies
ng g module dashboard/admin/settings/timezone --routing; ng g component dashboard/admin/settings/timezone
ng g module dashboard/admin/settings/activation --routing; ng g component dashboard/admin/settings/activation
ng g module dashboard/admin/settings/general --routing; ng g component dashboard/admin/settings/general
ng g module dashboard/admin/settings/email --routing; ng g component dashboard/admin/settings/email
ng g module dashboard/admin/settings/email-template --routing; ng g component dashboard/admin/settings/email-template
ng g module dashboard/admin/settings/payout --routing; ng g component dashboard/admin/settings/payout
ng g module dashboard/admin/settings/backup --routing; ng g component dashboard/admin/settings/backup

## others

converting to the new control flow automatically
use: ng g @angular/core:control-flow

[Live VS Code](https://code.visualstudio.com/learn/collaboration/live-share)
