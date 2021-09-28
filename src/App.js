import React, { Component } from 'react'
import LoginButton from "components/LoginButton";
import LogoutButton from "components/LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

export class App extends Component {
    render() {
        return (
            <div>
                <LoginButton />
                <LogoutButton />
            </div>
        )
    }
}

export default withAuth0(App)
