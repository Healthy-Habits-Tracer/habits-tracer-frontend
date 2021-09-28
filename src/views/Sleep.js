import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
import SleepForm from './SleepForm';
import DataButton from 'components/DataButton';
import { withAuth0 } from '@auth0/auth0-react';
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
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_PORT}/user`) // for showing data at page loadd
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };
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
    console.log("email" + this.state.email);
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


  handleAuth0 = async () => {
    await this.setState({
      email: this.props.auth0.user.email,
      name: this.props.auth0.user.name,
    });
     let userEmails = this.state.data.map((item) => {
      return item.email;
    });
     userEmails.includes( this.props.auth0.user.email)? this.getUserData() : this.postUser();
  };
  getUserData = () => {
    axios
        .get(`${process.env.REACT_APP_BACKEND_PORT}/one-user?email=${this.state.email}`)
        .then((res) => {
          this.setState({
            userData: res.data,
          });
        });
  }
  postUser = () =>
    // for creating user
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_PORT}/create-user?email=${this.state.email}`
      )
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  render() {
    return (
      <div className="content">
        <DataButton  handleAuth0 = {this.handleAuth0}/>
        <SleepForm handleDate = {this.handleDate} handleCheckBox = {this.handleCheckBox} UpdateHabit = {this.UpdateHabit}/>
      
      </div>
    )
  }
}

export default  withAuth0(Sleep)
