/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Activities from "layouts/tables/Activities/Activities";
import T2seet from "layouts/tables/T2seet/T2seet";
import News from "layouts/tables/News/News";
import Departement from "layouts/tables/Departements/Departement";
import Jornals from "layouts/tables/Jornals/Jornal";
import NewsOrm from "layouts/tables/NewsOrman/NewsOrm";
import MyProfile from "layouts/tables/MyProfile/MyProfile";
import Mndob from "layouts/tables/Mndob/Mndob";
import EstMontahy from "layouts/tables/EstMontahy/EstMontahy";
import Branches from "layouts/tables/Branches/Branches";
import Client from "layouts/tables/Clients/Clients";
import ClientProfile from "layouts/tables/Clients/ClientProfile";
import ContactUs from "layouts/tables/ContactUs/ContactUs";
import Banks from "layouts/tables/Banks/Banks";
import Partener from "layouts/tables/Partner/Partener";
import WayDonations from "layouts/tables/WaysDonation/WayDonations";
import Management from "layouts/tables/Management/Management";
import MobileDonation from "layouts/tables/MobileDon/MobileDonation";
import DonationTypes from "layouts/tables/DonTypes/DonationTypes";
import QuestionsMost from "layouts/tables/QuestionsMost/QuestionsMost";
import OrderTasleem from "layouts/tables/OrderTasleem/OrderTaslem";
import Departement1 from "layouts/tables/Departments1/Departement1";
// import Management from "layouts/tables/Management/ManagementModal";

const routes = [
  {
    type: "title",
    name: "Tables",
    key: "tables",
    title: "ادارة المتبرعين",
  },
  {
    type: "collapse",
    name: "تبرعات",
    key: "تبرعات",
    route: "/تبرعات",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "تبرعات الموبايل",
    key: "تبرعات الموبايل",
    route: "/تبرعات الموبايل",
    component: <MobileDonation />,
  },
  {
    type: "collapse",
    name: "ارسال مندوب",
    key: "ارسال مندوب",
    route: "/ارسال مندوب",
    component: <Mndob />,
  },
  {
    type: "collapse",
    name: "طلبات التسليم",
    key: "طلبات التسليم",
    route: "/طلبات التسليم",
    component: <OrderTasleem />,
  },

  {
    type: "collapse",
    name: "تواصل معنا",
    key: "تواصل معنا",
    route: "/تواصل معنا",
    component: <ContactUs />,
  },
  {
    type: "collapse",
    name: "الاقساط المنتهية",
    key: "الاقساط المنتهية",
    route: "/الاقساط المنتهية",
    component: <EstMontahy />,
  },
  {
    type: "divider",
    name: "الاقساط المنتهية",
    key: "divider1",
  },
  {
    type: "title",
    name: "Sign In",
    key: "signInTitle",
    title: "ادارة المستخدمين",
  },
  {
    type: "collapse",
    name: "المستخدمين",
    key: "users",
    route: "/المستخدم",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "الفروع",
    key: "الفروع",
    route: "/الفروع",
    component: <Branches />,
  },
  {
    type: "collapse",
    name: "الموظفين",
    key: "الموظفين",
    route: "/الموظفين",
    component: <Client />,
  },

  {
    type: "collapse",
    name: "الاقسام",
    key: "departments",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <Departement1 />,
  },
  {
    type: "divider",
    name: "الاقساط المنتهية",
    key: "divider2",
  },
  {
    type: "title",
    name: "Sign In",
    key: "signIn2",
    title: "ادارة الانشطة",
  },
  {
    type: "collapse",
    name: "الاقسام",
    key: "sections",
    route: "/الاقسام",
    component: <Departement />,
  },
  {
    type: "collapse",
    name: "انواع التبرع",
    key: "انواع التبرع",
    route: "/انواع التبرع",
    component: <DonationTypes />,
  },
  {
    type: "collapse",
    name: "الانشطة",
    key: "activities",
    route: "/الانشطة",
    component: <Activities />,
  },
  {
    type: "collapse",
    name: "انظمة التقسيط",
    key: "installmentSystems",
    route: "/التقسيط",
    component: <T2seet />,
  },
  {
    type: "collapse",
    name: "انشطة المحمول",
    key: "mobileActivities",
    route: "/authentication/sign-up",
  },
  {
    type: "divider",
    name: "الاقساط المنتهية",
    key: "divider3",
  },
  {
    type: "title",
    name: "Sign In",
    key: "sign In",
    title: "ادارة الاخبار",
  },
  {
    type: "collapse",
    name: "اخبار اونلاين",
    key: "onlineNews",
    route: "/اخبار",
    component: <News />,
  },
  {
    type: "collapse",
    name: "اخبار الاورمان",
    key: "اورمان",
    route: "/اخبار الاورمان",
    component: <NewsOrm />,
  },
  {
    type: "collapse",
    name: "الصحف",
    key: "الصحف",
    route: "/الصحف",
    component: <Jornals />,
  },
  {
    type: "divider",
    name: "الاقساط المنتهية",
    key: "divide3",
  },
  {
    type: "title",
    name: "Sign In",
    key: "signIn3",
    title: "اخرى",
  },
  {
    type: "collapse",
    name: "البنوك",
    key: "البنوك",
    route: "/البنوك",
    component: <Banks />,
  },
  {
    type: "collapse",
    name: "شريك النجاح",
    key: "شريك النجاح",
    route: "/شريك النجاح",
    component: <Partener />,
  },
  {
    type: "collapse",
    name: "طرق للتبرع",
    key: "طرق للتبرع",
    route: "/طرق للتبرع",
    component: <WayDonations />,
  },
  {
    type: "collapse",
    name: "مجلس الادارة",
    key: "مجلس الادارة",
    route: "/مجلس الادارة",
    component: <Management />,
  },
  {
    type: "collapse",
    name: "الاسئلة الشائعة",
    key: "الاسئلة الشائعة",
    route: "/الاسئلة الشائعة",
    component: <QuestionsMost />,
  },
];

export default routes;
