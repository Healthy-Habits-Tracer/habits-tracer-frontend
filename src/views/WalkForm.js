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
class WalkForm extends Component {
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
                    <label for="walk">Walk for 30 min</label>

                    <input
                      type="checkbox"
                      id="walk1"
                      name="walk"
                      value="walk"
                      onClick={this.props.handleCheckBox}
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <label for="walk">Warm up before exercise</label>
                  <input
                    type="checkbox"
                    id="walk2"
                    name="walk"
                    value="walk"
                    onClick={this.props.handleCheckBox}
                  />

                </Row>
                <Row>
                  <label for="walk">Exercise with a friend</label>
                  <input
                    type="checkbox"
                    id="walk3"
                    name="walk"
                    value="walk"
                    onClick={this.props.handleCheckBox}
                  />
                </Row>


                <Row>
                  <FormGroup>
                    <label for="walk">Plan exercise into your day.</label>
                    <input
                      type="checkbox"
                      id="walk4"
                      name="walk"
                      value="walk"
                      onClick={this.props.handleCheckBox}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <label for="walk">Eat healthy food</label>
                    <input
                      type="checkbox"
                      id="walk5"
                      name="walk"
                      value="walk"
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

export default WalkForm
