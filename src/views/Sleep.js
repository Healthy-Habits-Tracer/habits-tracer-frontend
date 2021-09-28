import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
import SleepForm from './SleepForm';
 class Sleep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userData:[],
      userEmails: [],
      email: "",
      quantity: 0,
      date: Date,
      name:'',
      habit:'',
      pixel:{}
    }
  }
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleCheckBox = (e) => {
    // for updating habit
    if (e.target.checked) {
      this.setState({
        quantity: this.state.quantity + 1,
      });
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };
  UpdateHabit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_PORT}/update-user/${this.state.email}`,
        {
          exercise: {
            date: `${this.state.date}`,
            quantity: `${this.state.quantity}`, 
          },
        }
      )
      .then((res) => {
        this.setState({
          userData: res.data,
          pixel:{"date": this.state.date.split('-').join(''), "quantity": `${this.state.quantity}`}
                });
      }).then(()=>{
        this.CreatePixel(this.state.pixel);
        // this.reloadIFrame();
      });    
  };

  render() {
    return (
      <div className="content">
        <SleepForm handleDate = {this.handleDate} handleCheckBox = {this.handleCheckBox} UpdateHabit = {this.UpdateHabit}/>
      
      </div>
    )
  }
}

export default Sleep
