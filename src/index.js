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
// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch} from "react-router-dom";

// import App from "App";

// import AdminLayout from "layouts/Admin/Admin.js";
// import RTLLayout from "layouts/RTL/RTL.js";

// import "assets/scss/black-dashboard-react.scss";
// import "assets/demo/demo.css";
// import "assets/css/nucleo-icons.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
// import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
// import HomePage from "./components/homepage.js";
// import { Auth0Provider } from "@auth0/auth0-react";


import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import HomePage from "./components/homepage.js"
import App from "App";

ReactDOM.render(
<Auth0Provider
    domain={`dev-35i0ibe7.us.auth0.com`}
    clientId={`uqSOedMRIEudQUlX7dc3HoieE9F76fUn`}
    redirectUri={`http://localhost:3000/`}
  >
    <App />
    <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
            {/* <Redirect from="/" to="/admin/dashboard" />  */}
          </Switch>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>,
  </Auth0Provider>,
 


  //   <ThemeContextWrapper>
  //   <BackgroundColorWrapper>
  //     <BrowserRouter>
  //       <Switch>
  //         <Route exact path="/">
  //           <HomePage/>
  //         </Route>
  //         <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
  //         <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
  //         {/* <Redirect from="/" to="/admin/dashboard" />  */}
  //       </Switch>
  //     </BrowserRouter>
  //   </BackgroundColorWrapper>
  // </ThemeContextWrapper>,
  
 
  document.getElementById("root")
);
