import React, { Component } from 'react'

 class WaterForm extends Component {
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
          <br/>
           <label for="water">8 cups a day</label>
          <input
            type="checkbox"
            id="water"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
   <br/>
          <label for="water">distribute water drinking over the day</label>
          <input
            type="checkbox"
            id="water1"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="water">low sodium water</label>
          <input
            type="checkbox"
            id="water2"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="water">Keep a reusable water bottle with you</label>
          <input
            type="checkbox"
            id="water3"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          <br/>
          <label for="water">Drink one glass of water when you wake up and before bed</label>
          <input
            type="checkbox"
            id="water4"
            name="water"
            value="water"
            onClick={this.props.handleCheckBox}
          />
          <br/>
         
          <button onClick={this.props.UpdateHabit}>Save</button>
          <br/>
        </form>
            </div>
        )
    }
}

export default WaterForm
