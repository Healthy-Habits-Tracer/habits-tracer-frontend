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
//import ProductData from "./ProductData.json";
import React, { Component } from 'react';

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
function Products() {
  return (
    <>
      <div className="content">

        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h4 className="title">SPORT WATCHES AND FITNESS TRACKERS</h4>
                <p className="category">
                You set your training goals. Our sports watches and fitness trackers will help you get there with personalized training guidance.
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <Col >
                    <img src="https://files.ozbargain.com.au/n/76/545176x.jpg?h=818bd465" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT UNITE</h4>
                    <h6> FITNESS WATCH</h6>
                    <h6> 149.90 EUR</h6>
                    <h6> Advanced wrist based heart rate. FitSpark™ daily training guide.<br /> Nightly Recharge™ automatic recovery measurement</h6>
                  </Col>
                  <Col >
                    <img src="https://cdn.mydeal.com.au/44995/heart-rate-blood-oxygen-monitoring-breathing-light-tempered-glass-leather-smart-watch-1061884_03.jpg?v=637081283148963484" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT VANTAGE V2</h4>
                    <h6> PREMIUM MULTISPORT WATCH</h6>
                    <h6>FROM 499.90 EUR</h6>
                    <h6> Lightweight design meets premium materials Performance tests for running and cycling Training Load Pro™, Recovery Pro™ Music controls and other smartwatch essentials</h6>
                  </Col>
                  <Col >
                    <img src="https://www.cubot.net/public/upload/goods/2021/02-03/b8652710b679d0fd43c45783e5e718e9.png" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT GRIT X</h4>
                    <h6> OUTDOOR MULTISPORT WATCH</h6>
                    <h6>FROM 429.90 EUR</h6>
                    <h6> Detailed uphill & downhill stats with HillSplitter™ Route planning with Komoot FuelWise™ smart fueling assistant Nightly Recharge™ recovery measurement</h6>
                  </Col>
                  <Col >
                    <img src="https://th.bing.com/th/id/OIP.UqL4iYATT3w4N40g6Bg5QwAAAA?pid=ImgDet&w=300&h=574&rs=1" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT VANTAGE M</h4>
                    <h6> MULTISPORT WATCH</h6>
                    <h6> 279.90 EUR</h6>
                    <h6> Advanced wrist-based heart rate Training Load Pro Changeable wristbands</h6>
                  </Col>
                  </Row>
                  <Row>
                  <Col >
                    <img src="https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/00a4829e-84de-4a05-98a5-f6872863875a/screenshots/4e588d6a-0209-4b8d-8fe4-336ef8485392" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT VANTAGE M2</h4>
                    <h6> FITNESS WATCH</h6>
                    <h6> 229.90 EUR</h6>
                    <h6> Get personalized guidance for workouts, recovery and sleep – in a beautifully designed watch that looks and feels good 24/7.</h6>
                  </Col>

                  <Col >
                    <img src="https://i.pinimg.com/originals/85/c2/14/85c2144ca0a7bbf9090ce23abed22375.jpg" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT IGNITE 2</h4>
                    <h6> MULTISPORT WATCH</h6>
                    <h6> 299.90 EUR</h6>
                    <h6> This multisport GPS watch is your all-in-one companion on your way towards new PR’s.</h6>
                  </Col>
                  <Col >
                    <img src="https://i.pinimg.com/originals/7b/63/ef/7b63efca1f81f1457a6068186b541608.jpg" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT IGNITE</h4>
                    <h6> FITNESS WATCH</h6>
                    <h6> 199.90 EUR</h6>
                    <h6> Advanced wrist-based heart rate Integrated GPS Nightly Recharge™ recovery measurement</h6>
                  </Col>
                  <Col >
                    <img src="https://th.bing.com/th/id/R.1f3eb06f973488732b50475bb3ce4adb?rik=Ies3Fri7i8Migg&riu=http%3a%2f%2forganizerhope.com%2fwp-content%2fuploads%2f2019%2f04%2f61pJu4PcQSL._SL1000_.jpg&ehk=N227tTGGm3p64m%2fUkNMh0%2b7qNAAbmePjsYcXZpNViqQ%3d&risl=&pid=ImgRaw&r=0" alt="" style={{ width: "300px", height: "300px" }} />
                    <h4 >HT M430</h4>
                    <h6> GPS RUNNING WATCH</h6>
                    <h6> 199.90 EUR</h6>
                    <h6> Wrist-based heart rate Advanced running features Polar Sleep Plus sleep tracking Polar Running Program</h6>
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

export default Products;
