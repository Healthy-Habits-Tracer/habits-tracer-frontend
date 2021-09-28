import React, { Component } from 'react'
import axios from 'axios';
import FoodCard from './FoodCard';

class HealthyTips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      foodList:[],
      foodDetails:[],
      ShowCard:false
    }
    
  }
  
 
  handleSubmit = (e) => {
    e.preventDefault();
   
    axios.get(`https://api.edamam.com/auto-complete?app_id=${process.env.REACT_APP_Edamam_APP_ID}&app_key=${process.env.REACT_APP_Edamam_App_KEY}&q=${this.state.q}`).then((response) => {
      //console.log('FoodList' +response.data);
      response.data.length > 0 ? this.setState({
        foodList: response.data,
        ShowCard:true
      }) : this.setState({
        foodList: []
      })
    }).catch((error) => {
      console.warn('error, talking with my server');
    });


  }//function end

  handleFood = (e) => {
    let food = e.target.value;
    this.setState({
      q: food
    })
  }

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
        </form>
        
        {this.state.ShowCard? <FoodCard foodList={this.state.foodList}/> :''   }     
     
      </div>
      </>
    )
  
  }
}

export default HealthyTips


