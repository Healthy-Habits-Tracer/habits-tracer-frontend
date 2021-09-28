import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
import ColumnCard from './ColumnCard'

import SleepForm from './SleepForm';
class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      foodList: [],

    }


  }

   
  render() {
    return (
      <>
         <Row>
      <Col >
          <Card>
              <CardHeader>

              </CardHeader>
              <CardBody className="all-icons">
                  <Row>
                      <Col >
                         
                          <img src={this.props.foodlist.image} alt="" style={{ width: "40px", height: "40px" }} />
                          <h6> {this.props.foodlist.label}</h6>
                          <h6>{this.props.foodlist.food.FAT}|{this.props.foodDetails.food.ENERC_KCAL}</h6>
                          <h6> {this.props.foodlist.category}</h6>
                      </Col>

                  </Row>
              </CardBody>
          </Card>
      </Col>
  </Row>
      </>
    )

  }
}

export default FoodCard

