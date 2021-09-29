import React, { Component } from 'react'

export class DataButton extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleAuth0}>Show Results</button>
           
            </div>
        )
    }
}

export default DataButton

