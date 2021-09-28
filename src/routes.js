/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Sleep from "views/Sleep.js";
import Water from "views/Water.js";
import Walk from "views/Walk.js";
import ContactUs from "views/ContactUs.js";
import HealthyTips from "views/HealthyTips.js";
import Products from "views/Products.js";
import UserProfile from "views/UserProfile.js";
import AboutUs from "views/AboutUs.js"



var routes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/sleep",
    name: "Get Good Sleep",
    rtlName: "Get Good Sleep",
    icon: "tim-icons icon-time-alarm",
    component: Sleep,
    layout: "/admin",
  },
  {
    path: "/water",
    name: "Drink Water",
    rtlName: "Drink Water",
    icon: "tim-icons icon-trophy",
    component: Water,
    layout: "/admin",
  },
  {
    path: "/walk",
    name: "Go for a Walk",
    rtlName: "Go for a Walk",
    icon: "tim-icons icon-user-run",
    component: Walk,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/healthy-foods",
    name: "Healthy Foods",
    rtlName: "Healthy Tips",
    icon: "tim-icons icon-bulb-63",
    component: HealthyTips,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Our Products",
    rtlName: "Products",
    icon: "tim-icons icon-cart",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    rtlName: "Contact Us",
    icon: "tim-icons icon-email-85",
    component: ContactUs,
    layout: "/admin",
  },
  {
    path: "/about-us",
   // name: "About Us",
   // rtlName: "About Us",
    
    component: AboutUs,
    layout: "/admin",
  },
];
export default routes;
