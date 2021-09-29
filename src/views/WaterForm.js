import React, { Component } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
 class WaterForm extends Component {
    render() {
        return (
        
<Row>
<Col md="8">
  <Card>
    <CardHeader>

    </CardHeader>
    <CardBody>
      <Form>
        <Row>
          <FormGroup>
          <label for="start">Select date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            onChange={this.props.handleDate}
          />

          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
          <label for="water">8 cups a day</label>
          <input
            type="checkbox"
            id="water"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          </FormGroup>
        </Row>

        <Row>
        <label for="water">distribute water drinking over the day</label>
          <input
            type="checkbox"
            id="water1"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
        </Row>
        <Row>
        <label for="water">low sodium water</label>
          <input
            type="checkbox"
            id="water2"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
        </Row>


        <Row>
          <FormGroup>
          <label for="water">Keep a reusable water bottle with you</label>
          <input
            type="checkbox"
            id="water3"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup>
          <label for="water">Drink one glass of water when you wake up and before bed</label>
          <input
            type="checkbox"
            id="water4"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          </FormGroup>



        </Row>


      </Form>
    </CardBody>
    <CardFooter>
      <Button className="btn-fill" color="primary" type="submit" onClick={this.props.UpdateHabit}>
        Save
      </Button>
    </CardFooter>
  </Card>
</Col>

</Row>

        )
    }
}

export default WaterForm
