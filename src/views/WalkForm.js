import React, { Component } from 'react'

 class WalkForm extends Component {
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
          
          {/* <input
            type="checkbox"
            id="walk"
            name="walk"
            value="walk"
            onClick={this.props.handleCheckBox}
          /> */}
          <br/>
          <label for="walk">Walk for 30 min</label>

          <input
            type="checkbox"
            id="walk1"
            name="walk"
            value="walk"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="walk">Warm up before exercise</label>
          <input
            type="checkbox"
            id="walk2"
            name="walk"
            value="walk"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="walk">Exercise with a friend</label>
          <input
            type="checkbox"
            id="walk3"
            name="walk"
            value="walk"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="walk">Plan exercise into your day.</label>
          <input
            type="checkbox"
            id="walk4"
            name="walk"
            value="walk"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="walk">Eat healthy food</label>
          <input
            type="checkbox"
            id="walk5"
            name="walk"
            value="walk"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <button onClick={this.props.UpdateHabit}>Save</button>
        </form>   
            </div>
        )
    }
}

export default WalkForm
