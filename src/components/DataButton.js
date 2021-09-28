import React, { Component } from 'react'

export class DataButton extends Component {
    render() {
        return (
            <div>
            <button onClick={this.props.handleAuth0}>auth0</button>
            </div>
        )
    }
}

export default DataButton

