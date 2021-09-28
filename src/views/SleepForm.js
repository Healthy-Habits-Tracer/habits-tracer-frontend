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
          <label for="start">select date:</label>
          <input
            type="date"
            id="start"
            name="trip-start"
            onChange={this.props.handleDate}
          />
          <input
            type="checkbox"
            id="sleep"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <label for="sleep">8 hours a day</label>
          <input
            type="checkbox"
            id="sleep1"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <label for="sleep">Sleep early, wake up early</label>
          <input
            type="checkbox"
            id="sleep2"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <label for="sleep">Limit blue light before sleep (smartphones, TV, laptops, etc..).ps a day</label>
          <input
            type="checkbox"
            id="sleep3"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <label for="sleep">Not eating for 4 hours before bedtime.</label>
          <input
            type="checkbox"
            id="sleep4"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <label for="sleep">Don’t consume caffeine late in the day</label>
          <input
            type="checkbox"
            id="sleep5"
            name="sleep"
            value="sleep"
            onClick={this.props.handleCheckBox}
          />
          <button onClick={this.props.UpdateHabit}>Save</button>
        </form>
            </div>
        )
    }
}

export default SleepForm
