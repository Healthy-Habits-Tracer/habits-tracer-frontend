import React, { Component } from 'react'
import axios from 'axios';
import WaterForm from './WaterForm';
import DataButton from 'components/DataButton';
import { withAuth0 } from '@auth0/auth0-react';
import Client from 'pixela-node'
const client = new Client()
 class Water extends Component {
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

//............................handle client API PIXELA NODE...........................//
getCreateUserApi(username,token){
  client.username = username.toLowerCase();
  client.token = token;
  console.log(client.username)
// Create User
  client
    .createUser({
      token: client.token,
      username: client.username ,
      agreeTermsOfService: 'yes',
      notMinor: 'yes'
    })
    .then(res => console.log(res.data))
    .catch(e => console.log(e.response.data))
    // Create Graph
    this.createGraphApi();

}
createGraphApi(){
// Create Graph
client
  .createGraph({
    id: "water",
    name: 'water',
    unit: 'score',
    type: 'int',
    color: 'shibafu'
  })
  .then(res => console.log(res.data))
  .catch(e => console.log(e.response.data))
}
CreatePixel(pixel){
client.createPixel("water",pixel).then(res => console.log(res.data))
.catch(e => console.log(e.res.data))}

deletePixel(graphId, date) {
  client.deletePixel(graphId,date).then(res => console.log(res.data)).catch(e => console.log(e.response.data))
}
getGraphApi(){
// Get Graphs
client.getGraphs().then(res => console.log(res.data))
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
          water: {
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

  handleDeletePixel =(deleteDate)=>{
    this.deletePixel('water',deleteDate)

  }


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
      <br/>
        <WaterForm handleDate = {this.handleDate} handleCheckBox = {this.handleCheckBox} UpdateHabit = {this.UpdateHabit}/>
        {this.state.name && <button onClick={this.getCreateUserApi(this.state.name.split(" ").join(''),'12345678')} >Show my results</button>}
        <button onClick={()=>this.handleDeletePixel(this.state.date.split("-").join(""))}> delete day</button>
 {this.state.name && 
<iframe id='pixelaFram' src={`https://pixe.la/v1/users/${this.state.name.split(" ").join('')}/graphs/water.html`} title="description" style={{"width" :'700px', 'height':'450px'}}></iframe>}
      
      </div>
    )
  }
}

export default withAuth0(Water)
