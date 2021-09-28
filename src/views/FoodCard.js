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


        <li style={{ display: "inline" }}>


          <img src={this.props.foodlist.image} alt="" style={{ width: "300px", height: "300px" }} />
          <h6> {this.props.foodlist.label}</h6>
          <h6> {this.props.foodlist.category}</h6>

          {/* {this.props.foodlist.nutrients.FAT}{this.props.foodDetails.nutrients.ENERC_KCAL} */}

        </li>


      </>

    )

  }
}

export default FoodCard

