import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button style={{ backgroundColor: "#04009A", color: "White", fontSize: "25px", marginLeft: "10px", padding: "10px 10px" }} onClick={() => {
    loginWithRedirect();
    //console.log("hello")
  }}>Get Started</button>;
};
export default LoginButton;