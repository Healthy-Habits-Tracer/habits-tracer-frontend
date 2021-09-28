import React, { Component } from 'react'
import axios from 'axios';
import FoodCard from './FoodCard';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import "assets/css/home.css";
class HealthyTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      foodList: [],
      foodDetails: [],
      ShowCard: false,
      image: "",
      label: "",
      FAT: '',
      ENERC_KCAL: '',
      category: ''
    }

  }


  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.edamam.com/auto-complete?app_id=${process.env.REACT_APP_Edamam_APP_ID}&app_key=${process.env.REACT_APP_Edamam_App_KEY}&q=${this.state.q}`).then((response) => {
      // console.log('FoodList' +response.data);
      response.data.length > 0 ? this.setState({
        foodList: response.data,
        ShowCard: true
      }) : this.setState({
        foodList: []
      })
      let select = document.getElementById("selectNumber");
      for (let i = 0; i < this.state.foodList.length; i++) {
        //console.log( response.data[i]);
        let opt = this.state.foodList[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }

    }).catch((error) => {
      console.warn('error, talking with my server');
    });

  }//function end

  handleFood = (e) => {
    let food = e.target.value;
    this.setState({
      q: food
    })


  }//function end

  handleDetails = (e) => {
    let select = document.getElementById("selectNumber");
    let ingr = select.value;//select.options[select.selectedIndex].innerHTML;
    console.log("ingr " + ingr);
    //let ingr = e.target.value;

    axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_Edamam_APP_ID}&app_key=${process.env.REACT_APP_Edamam_App_KEY}&ingr=${ingr}`).then((res) => {
      // res.data.hints
      res.data.hints.length > 0 ? this.setState({
        foodDetails: res.data.hints,
        ShowCard: true,
        // image:response.data.hints.food.image, 
        // label:response.data.hints.food.label,
        //  FAT:response.data.hints.food.nutrients.FAT,
        //  ENERC_KCAL:response.data.hints.food.nutrients.FAT,
        // category:response.data.hints.food.category
      }) : this.setState({
        foodDetails: []
      })
    }).catch((error) => {
      console.warn('error, talking with my server');
    });
    console.log('foodDetails' + this.state.foodDetails);

  }//function end​

  render() {
    return (
      <>
        <div className="content">

          <form onSubmit={this.handleSubmit}>
            <label>Find something to cook</label>
            <br />
            <input id="txtFood"
              type="text"
              placeholder="Salad"
              onChange={this.handleFood}
            />
            <input type="submit" value="Explore!" />
            <br /><br /><br />
            <select id="selectNumber" >
              <option>Choose a food</option>
            </select>

            <button onClick={this.handleDetails}>See More Details</button>
          </form>
          <br />
<div className="ULDiv">
<ul style={{ display: "inline" }}>
                  {
                    this.state.foodDetails.map((item) => {
                      console.log('item' + item);
                      return <FoodCard foodlist={item.food} />
                    })

                  }
                  </ul>
                  </div>
                  
        </div>
      </>
    )

  }
}

export default HealthyTips


