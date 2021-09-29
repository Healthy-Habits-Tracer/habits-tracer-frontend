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
class SleepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
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
                    <label for="sleep">8 hours a day</label>
                    <input
                      type="checkbox"
                      id="sleep1"
                      name="sleep"
                      value="sleep"
                      onClick={this.props.handleCheckBox}
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <label for="sleep">Sleep early, wake up early</label>
                    <input
                      type="checkbox"
                      id="sleep2"
                      name="sleep"
                      value="sleep"
                      onClick={this.props.handleCheckBox}
                    />
                  </FormGroup>

                </Row>
                <Row>
                  <FormGroup>
                    <label for="sleep">Limit blue light before sleep (smartphones, TV, laptops, etc..).ps a day</label>
                    <input
                      type="checkbox"
                      id="sleep3"
                      name="sleep"
                      value="sleep"
                      onClick={this.props.handleCheckBox}
                    />
                  </FormGroup>

                </Row>


                <Row>
                  <FormGroup>
                    <label for="sleep">Not eating for 4 hours before bedtime.</label>
                    <input
                      type="checkbox"
                      id="sleep4"
                      name="sleep"
                      value="sleep"
                      onClick={this.props.handleCheckBox}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <label for="sleep">Don’t consume caffeine late in the day</label>
                    <input
                      type="checkbox"
                      id="sleep5"
                      name="sleep"
                      value="sleep"
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

export default SleepForm
