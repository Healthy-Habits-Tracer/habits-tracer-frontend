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
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://habits-tracer-frontend.netlify.app/">
              Habits Tracker
            </NavLink>
          </NavItem>
          <NavItem>
            <Link to="/admin/about-us" style={{color:"white"}}>
              About Us
            </Link>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.becomingminimalist.com/habits-to-change-your-life/"  target="_blank">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://habits-tracer-frontend.netlify.app/"
            target="_blank"
          >
            Habits Tracker
          </a>{" "}
          for enhance your habit-building process.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
