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
import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
function ContactUs() {

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">For more information please contact us:</h4>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <Col >

                    <h4 className="title">Location:</h4> 
                    <h5>Bryggargatan 3<br/> 111 21 Stockholm, Sverige<br/> Sweden  </h5>
                    <h4 className="title">E-mail:</h4> 
                    <h5>info@habits-tracker.com </h5>
                    <h4 className="title">Phone:</h4> 
                    <h5>+46 705 576 465 </h5>
                    <h4 className="title">Fax:</h4> 
                    <h5> +46 705 576 444  </h5>
                    <h4 className="title">Working Time:</h4> 
                    <h5>Saturday -Wednesday: from 8:00AM to 6:00PM<br/> Thursday: from 8:00AM to 3:00PM  </h5>
                    

                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default ContactUs;
