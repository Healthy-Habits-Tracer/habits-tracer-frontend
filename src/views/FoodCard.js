import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from 'axios';
 class FoodCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            foodDetails:[],
          
          }
  
       
     }

     componentDidMount = async () => {
        let foodDetailsArr=[];
       // console.log('Map to render'+this.props.foodList);
        this.props.foodList.forEach(async (ingr)=>{
            let data = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.REACT_APP_Edamam_APP_ID}&app_key=${process.env.REACT_APP_Edamam_App_KEY}&ingr=${ingr}`);
            foodDetailsArr.push(data.data.parsed);    
            this.setState({
                foodDetails:foodDetailsArr
            })
        
        })//foreach end
       
       
        console.log('foodArray ' +this.state.foodDetails,foodDetailsArr );
     
      }
    render() {
        return (
            <div>
               {/* <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
              {
               
                this.state.foodDetails.map((item)=>{
                  
                  return <Col >
                  <img src={item.food.image} alt="" style={{ width: "300px", height: "300px" }} />
                  <h6> {item.food.label}</h6>
                  <h6>{item.food.nutrients.FAT}|{item.food.nutrients.ENERC_KCAL}</h6>
                  <h6> {item.food.category}</h6>
                </Col>
                })
                  
                }
                <Col><h1>Card render</h1></Col>
                  </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>   */}
            </div>
        )
    }
}

export default FoodCard

