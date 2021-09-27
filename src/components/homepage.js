import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "assets/css/home.css";

class homepage extends Component {
    render() {
        return (
            <>
                <div className="headerDiv">
                    <div className="logoDiv">
                        <img
                            alt="logo"
                            src={require("assets/HabitImg/logo1.png").default}
                            style={{ width: "40px", height: "40px" }} />

                        <h1 style={{ color: "#0F044C", fontWeight: "bold" }}>Habits Tracker</h1>


                    </div>

                    <ul style={{ display:"inline",  margin: "20px 10px"}} >
                        <li  style={{ display:"inline",  margin: "20px 10px"}}>
                            <a href="#" style={{ color: "#0F044C",fontWeight:"bold"}}>
                                <img alt="facebook"
                                    src={require("assets/HabitImg/fb.png").default}
                                    style={{ width: "40px", height: "40px" }} />
                                Share
                            </a>
                        </li>
                        <li style={{ display:"inline",  margin: "20px 10px"}}>
                            <a href="#" style={{ color: "#0F044C",fontWeight:"bold"}}>
                                <img alt="twitter"
                                    src={require("assets/HabitImg/tw.png").default}
                                    style={{ width: "40px", height: "40px" }} />
                                Tweet
                            </a>
                        </li>
                        <li style={{ display:"inline", margin: "20px 10px"}}>
                            <a href="#" style={{ color: "#0F044C",fontWeight:"bold"}}>
                                <img alt="mail"
                                    src={require("assets/HabitImg/email.png").default}
                                    style={{ width: "40px", height: "40px" }} />
                                Email
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <p><h2 style={{ color: "#0F044C", fontWeight: "bold", fontSize: "30px", marginLeft: "10px" }}>Build Golden Habits, Unlock your <br /> Potential</h2></p>
                    <p><h4 style={{ color: "#0F044C", fontSize: "30px", marginLeft: "10px" }}>Focus on what truly matters <br /> with Habits Tracker. <br />
                        Build the best version of yourself  <br />by mastering your habits.</h4></p>
                </div>
                <br />
                <div>
                    <p><h2 style={{ color: "#0F044C", fontWeight: "bold", fontSize: "30px", marginLeft: "10px" }}>How It Works?</h2></p>
                    <p><h4 style={{ color: "#0F044C", fontSize: "30px", marginLeft: "10px" }}>Habit building in its essential steps: <br />choose a habit, actually remember to do it, <br />and track your development.</h4></p>
                </div>
                <br />
                <div>
                    <p><h2 style={{ color: "#0F044C", fontWeight: "bold", fontSize: "30px", marginLeft: "10px" }}>Get the Keys</h2></p>
                    <p><h4 style={{ color: "#0F044C", fontSize: "30px", marginLeft: "10px" }}>Start your journey in less than 3 minutes!</h4></p>
                    <br />
                    <Link style={{ backgroundColor: "#04009A", color: "White", fontSize: "25px", marginLeft: "10px", padding: "10px 10px" }} to="/admin/dashboard">Get Started</Link>

                </div>
                <br /><br /><br />
                <div style={{ alignItems: "center", textAlign: "center" }}><h6 style={{ color: "#0F044C" }}>© 2017 - 2021 Habits Tracker. All rights reserved.</h6></div>

            </>
        )
    }
}

export default homepage

