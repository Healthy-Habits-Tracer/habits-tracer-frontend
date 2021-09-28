import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
class ColumnCard extends Component {
    constructor(props) {
        super(props);
        this.state = {          
           
          
          } 
        
     }
     componentDidMount = async () => {
        console.log('hi');
    }
    render() {
        return (
            <div>
                <h1>hi</h1>
                <Row>
                    <Col >
                        <Card>
                            <CardHeader>

                            </CardHeader>
                            <CardBody className="all-icons">
                                <Row>
                                    <Col >
                                       
                                        <img src={this.props.image} alt="" style={{ width: "40px", height: "40px" }} />
                                        <h6> {this.props.label}</h6>
                                        <h6>{this.props.FAT}|{this.props.ENERC_KCAL}</h6>
                                        <h6> {this.props.category}</h6>
                                    </Col>

                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ColumnCard


