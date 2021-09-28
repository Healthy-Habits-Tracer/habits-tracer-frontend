import React, { Component } from 'react'

 class SleepForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }
    render() {
        return (
            <div>
          <form>
          <label for="start">Select date:</label>
        
          <input
            type="date"
            id="start"
            name="trip-start"
            onChange={this.props.handleDate}
          />
            <br/>
          {/* <input
            type="checkbox"
            id="sleep"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          /> */}
          <label for="sleep">8 hours a day</label>
          <input
            type="checkbox"
            id="sleep1"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
            <br/>
          <label for="sleep">Sleep early, wake up early</label>
          <input
            type="checkbox"
            id="sleep2"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
            <br/>
          <label for="sleep">Limit blue light before sleep (smartphones, TV, laptops, etc..).ps a day</label>
          <input
            type="checkbox"
            id="sleep3"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
            <br/>
          <label for="sleep">Not eating for 4 hours before bedtime.</label>
          <input
            type="checkbox"
            id="sleep4"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
            <br/>
          <label for="sleep">Don’t consume caffeine late in the day</label>
          <input
            type="checkbox"
            id="sleep5"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <button onClick={this.props.UpdateHabit}>Save</button>
        
        </form>
            </div>
        )
    }
}

export default SleepForm
