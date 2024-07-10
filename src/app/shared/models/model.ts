// src/app/shared/models/model.ts

export interface GuestUser {
  id: string;
  email: string;
  user_type: string;
}

export interface url {
  url: string;
}
export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  data: [];
  totalData: number;
}
export interface TransactionStudent {
  referredId: string;
  details: string;
  status?: string;
  amount: string;
  postBalance: string;
}
export interface studentList {
  img1: string;
  name1: string;
  role1: string;
  img2: string;
  place1: string;
  img3: string;
  name2: string;
  role2: string;
  img4: string;
  place2: string;
}
export interface studentGrid1 {
  img1: string;
  name: string;
  role: string;
  img2: string;
  place: string;
}
export interface studentGrid2 {
  img1: string;
  name: string;
  role: string;
  img2: string;
  place: string;
}
export interface studentProfileEducation {
  heading: string;
  paragraph: string | number;
  letter: string;
  content: string;
}
export interface studentProfileExperience {
  heading: string;
  paragraph: string | number;
  letter: string;
  content: string;
}
export interface studentProfileCourses {
  img1: string;
  img2: string;
  name: string;
  content: string;
  price1: string;
  price2: string;
  role: string;
  lesson: string | number;
  student: string | number;
  time: string | number;
}
export interface studentProfileReviews {
  name: string;
  role: string;
  content: string;
  setting: string;
}
export interface studentProfileContactDetails {
  heading: string;
  paragraph: string;
  img: string;
}
export interface settingSupportTickets1 {
  no: string | number;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface settingSupportTickets2 {
  no: string | number;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface settingSupportTickets3 {
  no: string | number;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface settingSupportTickets4 {
  no: string | number;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface settingStudentActive {
  content1: string;
  content2: string | number;
}
export interface settingStudentExpired {
  content1: string;
  content2: string | number;
}
export interface settingStudentEarnings {
  content1: string;
  price: string | number;
  content2: string;
}
export interface settingStudentReferral {
  referrals: string;
  img: string;
  referredId: string;
  url: string;
  visits: string;
  totalEarned: string;
}
export interface settingStudentInvoice {
  orderId: string;
  date: string;
  amount: string;
  status: string;
}
export interface depositStudent {
  referredId: string;
  gateway: string;
  amount: string;
  time: string;
  status: string;
}
export interface DepositStudentDashboard {
  img: string;
  count: string;
  courses: string;
  content: string;
}
export interface CourseStudent {
  img: string;
  content: string;
  rating1: string;
  rating2: string;
  progress?: string;
  completion: string;
  lesson: string;
}
export interface wishlist {
  img: string;
  price: string;
  content1: string;
  lesson: string;
  time: string;
  rating1: string;
  rating2: string;
  content2: string;
}
export interface purchaseHistory {
  img1: string;
  content1: string;
  content2: string;
  content3: string;
  idle?: string;
  img2: string;
  img3: string;
  img4: string;
  lesson: string;
  time: string;
  rating1: string;
  rating2: string;
  name: string;
  role: string;
  amount1?: string;
  amount2?: string;
}
export interface pricingPlan {
  heading: string;
  content1: string;
  content2: string;
  dollar: string;
  price: string;
}
export interface notificationsToday {
  img: string;
  name: string;
  time: string;
  content: string;
  setting: string;
}
export interface notificationsYesterday {
  img: string;
  name: string;
  time: string;
  content: string;
  setting: string;
}
export interface jobCategoryGraphics {
  img1: string;
  content1: string;
  count1: string;
  img2: string;
  content2: string;
  count2: string;
  img3: string;
  content3: string;
  count3: string;
  img4: string;
  content4: string;
  count4: string;
  img5: string;
  content5: string;
  count5: string;
  img6: string;
  content6: string;
  count6: string;
}
export interface jobCategoryprogramming {
  img1: string;
  content1: string;
  count1: string;
  img2: string;
  content2: string;
  count2: string;
  img3: string;
  content3: string;
  count3: string;
  img4: string;
  content4: string;
  count4: string;
}
export interface jobCategorymarketing {
  img1: string;
  content1: string;
  count1: string;
  img2: string;
  content2: string;
  count2: string;
  img3: string;
  content3: string;
  count3: string;
}
export interface jobCategoryanimation {
  img1: string;
  content1: string;
  count1: string;
  img2: string;
  content2: string;
  count2: string;
  img3: string;
  content3: string;
  count3: string;
}
export interface courseWishlist {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  idle?: string;
  content1: string;
  content2: string;
  lesson: string;
  time: string;
  rating1: string;
  rating2: string;
  name: string;
  role: string;
  amount1?: string;
  amount2?: string;
  active?: boolean;
}
export interface courseList {
  map(arg0: (res: courseList, index: number) => void): unknown;
  data: courseList;
  totalData: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  amount1: string;
  amount2: string;
  content1: string;
  content2: string;
  lesson: string;
  time: string;
  rating1: string;
  rating2: string;
  name: string;
  role: string;
  active?: boolean;
}
export interface latestCourses {
  img: string;
  content1: string;
  content2: string;
}
export interface courseGrid {
  map(arg0: (res: courseGrid, index: number) => void): unknown;
  totalData: number;
  data: courseGrid;
  img1: string;
  img2: string;
  name: string;
  heading: string;
  price1: string;
  price2: string;
  role: string;
  img3: string;
  img4: string;
  rating1: string;
  rating2: string;
  time: string;
  lesson: string;
  idle?: string;
  active?: boolean;
}
export interface cart {
  img1: string;
  img2: string;
  img3: string;
  heading: string;
  lesson: string;
  time: string;
  idle?: string;
  rating1: string;
  rating2: string;
  setting: string;
  price1?: string;
  price2?: string;
}
export interface withdrawalInstructor {
  referredId: string;
  gateway: string;
  amount: string;
  time: string | number;
  status: string;
}
export interface withdrawalInstructorProfile {
  img: string;
  heading: string;
  paragraph: string;
}
export interface transactionsInstructor {
  referredId: string;
  details: string;
  amount: string;
  postBalance: string;
  status?: string;
}
export interface transactionInstructorProfile {
  img: string;
  heading: string;
  paragraph: string;
  status?: string;
}
export interface instructorList {
  totalData: number;
  data: instructorList;
  id: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
  role: string;
  rating1: string;
  rating2: string;
  time: string;
  lesson: string;
  student: string;
}
export interface instructorGrid {
  img1: string;
  img2: string;
  img3: string;
  name: string;
  role: string;
  time: string;
  rating1: string;
  rating2: string;
}
export interface instructorGrid2 {
  img1: string;
  img2: string;
  img3: string;
  name: string;
  role: string;
  time: string;
  rating1: string;
  rating2: string;
}
export interface instructorTickets1 {
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorTickets2 {
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorTickets3 {
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorTickets4 {
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorStudentList {
  name: string;
  enrolled: string;
  progress: string;
  locations: string;
  img: string;
}
export interface instructorStudentGrid {
  img: string;
  name: string;
  place: string;
  date: string;
  number: string;
  content1: string;
  content2: string;
}
export interface instructorReviews {
  name: string;
  img: string;
  role: string;
  content: string;
  setting: string;
}
export interface instructorProfile {
  heading: string;
  rating1: string;
  rating2: string;
  active?: boolean;
}
export interface instructorProfileEducation {
  heading: string;
  paragraph: string | number;
  letter: string;
  content: string;
}
export interface instructorProfileExperience {
  heading: string;
  paragraph: string | number;
  letter: string;
  content: string;
}
export interface instructorProfileCourses {
  img1: string;
  img2: string;
  name: string;
  content: string;
  price1: string;
  price2: string;
  lesson: string;
  role: string;
  time: string;
  img3: string;
  img4: string;
  rating1: string;
  rating2: string;
  content2: string;
  active?: boolean;
}
export interface instructorProfileReviews {
  name: string;
  role: string;
  content: string;
}
export interface instructorProfileOverview {
  heading: string;
  paragraph: string;
  img: string;
}
export interface instructorProfileContactDetails {
  heading: string;
  paragraph: string;
  img: string;
}
export interface withdrawHistory {
  id: string;
  date: string;
  status: string;
  amount: string;
  method: string;
}
export interface orders {
  courses: string;
  sales: string;
  invoice: string;
  date: string;
  method: string;
}
export interface forgotPassword {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface welcomeLogin {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface newPassword {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface registerFive {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface registerFour {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface registerOne {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface registerThree {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface registerTwo {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface register {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface verificationCode {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface blogDetailsRecentPosts {
  img1: string;
  img2: string;
  content: string;
  date: string;
}
export interface blogGrid {
  img1: string;
  img2: string;
  img3: string;
  content: string;
  sub: string;
  paragraph: string;
  date: string;
}
export interface blogGridRecentPosts {
  img1: string;
  img2: string;
  content: string;
  date: string;
}
export interface blogList {
  img1: string;
  img2: string;
  date: string;
  sub: string;
  content: string;
  paragraph: string;
}
export interface blogMasonry {
  img1: string;
  date1: string;
  sub1: string;
  content1: string;
  img2: string;
  date2: string;
  sub2: string;
  content2: string;
  img3: string;
  img4: string;
  paragraph1: string;
  paragraph2: string;
}
export interface blogModern {
  img1: string;
  img2: string;
  img3: string;
  content: string;
  date: string;
  sub: string;
}
export interface instructorEarnings {
  courses: string;
  img: string;
  sales: string;
  amount: string;
}
export interface bestSellingCourses {
  courses: string;
  img: string;
  sales: string;
  amount: string;
}
export interface depositHistory {
  referredId: string;
  gateway: string;
  amount: string;
  time: string;
  status: string;
}
export interface depositInstructor {
  img: string;
  heading: string;
  paragraph: string;
}
export interface myCourse {
  img1: string;
  img2: string;
  img3: string;
  content: string;
  lesson: string;
  time: string;
  rating: string;
  ratingNum: string;
}
export interface universitiesCompanies {
  img: string;
}
export interface category {
  title: string;
  instructors: string;
  img: string;
}
export interface Featured_Courses {
  title: string;
  id: number;
  reviews: string;
  course: string;
  author: string;
}
export interface trending_Courses {
  id: number;
  title: string;
  reviews: string;
  course: string;
}
export interface feature_instructors {
  id: number;
  name: string;
  title: string;
  students: string;
}

export interface real_reviews {
  title: string;
  para: string;
  name: string;
  role: string;
}
export interface blog {
  id: number;
  badge: string;
  title: string;
  date: string;
}
export interface counter {
  id: number;
  class: string;
  counter: number;
  title: string;
  end: string;
}
export interface favourite {
  id: number;
  title: string;
}
export interface tab1 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface tab2 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface tab3 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface tab4 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface tab5 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface tab6 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface tab7 {
  courseimg: string;
  avatar: string;
  title: string;
  content: string;
  students: string;
  currentamt: string;
}
export interface trending_course {
  badge: string;
  title: string;
  students: string;
  time: string;
  rate: string;
  avator: string;
  class: string;
}
export interface swiper {
  rating: string;
  avatar: string;
  name: string;
  role: string;
}
export interface topCategories {
  img: string;
  course: string;
  instructors: string;
}
export interface trendingCourses {
  img1: string;
  newPrice: string;
  oldPrice: string;
  img2: string;
  name: string;
  subject: string;
  lesson: string;
  time: string;
  role: string;
  img3: string;
  img4: string;
  active?: boolean;
}
export interface featuredInstructor {
  img: string;
  name: string;
  domain: string;
  students: string;
}
export interface latestBlogs {
  img: string;
  content: string;
  role: string;
  date: string;
}
export interface featuredCourses {
  img1: string;
  amount1?: string;
  amount2?: string;
  img2: string;
  name: string;
  content: string;
  lesson: string;
  time: string;
  rating1: string;
  rating2: string;
  sale: string;
  img3: string;
  img4: string;
  idle?: string;
  active?: boolean;
}
export interface career {
  img: string;
  content: string;
}
export interface universitiesCompanies {
  img: string;
}
export interface testimonial {
  img: string;
  name: string;
  sub: string;
  qute: string;
  paragraph: string;
}
export interface profileDetails {
  heading: string;
  paragraph: string;
  content: string;
  img: string;
}
export interface referredUsers {
  referredID: string;
  details: string;
  amount: string;
  postBalance: string;
  status?: string;
}
export interface depositInstructorDashboard {
  img: string;
  heading: string;
  paragraph: string;
}
export interface instructorCourse {
  img1: string;
  img2: string;
  img3: string;
  content: string;
  students: string;
  status: string;
  lesson: string;
  time: string;
  progress: string;
}
export interface instructorEdit {
  heading: string;
  rating1: string;
  rating2: string;
  active?: boolean;
}
export interface instructorEditEducation {
  heading: string;
  letter: string;
  paragraph: string;
  content: string;
}
export interface instructorEditExperience {
  heading: string;
  paragraph: string;
  letter: string;
  content: string;
}
export interface instructorEditCourses {
  img1: string;
  img2: string;
  name: string;
  content1?: string;
  newPrice?: string;
  oldPrice: string;
  lesson: string;
  role: string;
  time: string;
  img3: string;
  img4: string;
  rating1: string;
  rating2: string;
  content2: string;
  active?: boolean;
}
export interface instructorEditReviews {
  name: string;
  role: string;
  content: string;
  img: string;
  setting: string;
}
export interface instructorEditContactDetails {
  heading: string;
  paragraph: string;
  img: string;
}
export interface instructorEditOverview {
  heading: string;
  paragraph: string;
  img: string;
}
export interface instructorCourseList {
  map(arg0: (res: instructorCourseList, index: number) => void): unknown;
  totalData: number;
  data: instructorCourseList;
  img1: string;
  img2: string;
  img3: string;
  content: string;
  students: string;
  status: string;
  lesson: string;
  time: string;
  progress: string;
}

export interface Instructor_sideBar {
  tittle: string;
  class: boolean;
  menu: {
    menuValue: string;
    route: string;
    icon: string;
    base: string;
    subMenus: never[];
  }[];
}
export interface Student_sideBar {
  tittle: string;
  class: boolean;
  menu: {
    menuValue: string;
    route: string;
    icon: string;
    base: string;
    subMenus: never[];
  }[];
}
export interface courseList {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  amount1: string;
  amount2: string;
  content1: string;
  content2: string;
  lesson: string;
  time: string;
  rating1: string;
  rating2: string;
  name: string;
  role: string;
}
export interface courseGrid {
  img1: string;
  img2: string;
  name: string;
  heading: string;
  price1: string;
  price2: string;
  role: string;
  img3: string;
  img4: string;
  rating1: string;
  rating2: string;
  time: string;
  lesson: string;
}
export interface allInstructorList {
  map(arg0: (res: allInstructorList, index: number) => void): unknown;
  id: number;
  totalData: number;
  data: allInstructorList;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
  role: string;
  rating1: string;
  rating2: string;
  time: string;
  lesson: string;
  student: string;
}
export interface allInstructorGrid {
  map(arg0: (res: allInstructorGrid, index: number) => void): unknown;
  totalData: number;
  data: allInstructorGrid;
  img1: string;
  img2: string;
  img3: string;
  name: string;
  role: string;
  time: string;
  rating1: string;
  rating2: string;
}
export interface instructorTicket1 {
  map(arg0: (res: instructorTickets1) => void): unknown;
  data: instructorTicket1;
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorTicket2 {
  map(arg0: (res: instructorTickets2) => void): unknown;
  data: instructorTicket2;
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorTicket3 {
  map(arg0: (res: instructorTickets3) => void): unknown;
  data: instructorTicket3;
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface instructorTicket4 {
  map(arg0: (res: instructorTickets4) => void): unknown;
  data: instructorTicket4;
  no: string;
  subject: string;
  priority: string;
  category: string;
  status: string;
}
export interface latestTransaction {
  map(arg0: (res: latestTransactions) => void): unknown;
  data: latestTransaction;
  referredId: string;
  details: string;
  amount: string;
  postBalance: string;
}
export interface SubMenu {
  menuValue: string;
  route: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  base: string;
  page: string;
  last: string;
  subMenus: SubMenu[];
}

export interface MenuItem {
  menuValue: string;
  route?: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  base?: string;
  page?: string;
  last?: string;
  subMenus: SubMenu[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

export interface SidebarItem {
  tittle: string;
  base?: string;
  base2?: string;
  base3?: string;
  base4?: string;
  showAsTab: boolean;
  separateRoute: boolean;
  route?: string;
  menu: MenuItem[];
  class?: boolean;
}
export interface latestTransactions {
  referredId: string;
  details: string;
  amount: string;
  postBalance: string;
  status: string;
}
export interface instructorAnnouncement {
  date: string;
  time: string;
  announcements: string;
  id: number;
}
export interface instructorAssignment {
  assignmentName: string;
  totalMarks: string;
  totalSubmit: string;
  id: number;
}
export interface instructorWithdraw {
  withdrawalMethod: string;
  requestedOn: string;
  time: string;
  amount: number;
  status: string;
  id: number;
  date: string;
}

export interface ThemeSetting {
  id: number;
  primary_color: string;
  secondary_color: string;
  text_color: string;
  background_color: string;
  link_color: string;
  header_background_color: string;
  footer_background_color: string;
  primary_color_dark: string;
  secondary_color_dark: string;
  text_color_dark: string;
  background_color_dark: string;
  link_color_dark: string;
  header_bgcolor_dark: string;
  footer_bgcolor_dark: string;
}

export interface Enrollment{
  id: any;
  first_name: string
  middle_name: string
  last_name: string
  last_school: string
  email: string
  contact_number: string
  birth_certificate_url: string
  graduation_certificate_url: string
  pictures_url: string
  e_signature_url: string
  payment_status: string
  scholarship: string
  cbc_url: string
  chest_xray_url: string
  drug_test_url: string
  report_card_url: string
  medical_certificate_url: string
  good_moral_certificate_url: string
  als_certificate_url: string
  transfer_certificate_url: string
  YEAR: number
  course: string
  section: string
  address: string
  age: number
  approve: boolean
  lms_password: string

}