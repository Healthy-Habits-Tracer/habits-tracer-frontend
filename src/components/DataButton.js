import React, { Component } from 'react'
import {Button} from "reactstrap"
export class DataButton extends Component {
    render() {
        return (
            <div>
             <Button className="btn-fill" color="primary" type="submit" onClick={this.props.handleAuth0}>Show Results</Button>
           
            </div>
        )
    }
}

export default DataButton

