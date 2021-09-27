import React, { Component } from 'react'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function AboutUs() {
    return (
        <>

            <div className="content">

                <Row>
                    <Col md="12">
                        <div>
                        <h1>Habits Tracker</h1>
                           
                            <p>Our primary mission is "To Improve People's Lives" and that is what we do every day</p>
                         
                            <p>We want to become the most innovative, inclusive, and sustainable healthy habits application in the world. Our goal is to deliver value growth and best-in-class performance</p>

                        
                            </div>
                            <br/> <br/>
                        <Card>
                            <CardHeader>
                                <h4 className="title">Our Professional Team</h4>
                            </CardHeader>
                            <CardBody className="all-icons">
                              
                                    <Row>
                                    <Col >
                                        <img src="https://ca.slack-edge.com/TNGRRLUMA-U026A5PM02F-1230b9d51081-512" alt="" style={{ width: "300px", height: "300px" }} />
                                        <h4 >Razan Armouti</h4>
                                        <h6> Full Stack Developer</h6>
                                        <a href="https://github.com/RazanArmouti" style={{color:"white"}}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width:"20px", height:"20px"}}/>GitHub</a>
                                        <a href="https://www.linkedin.com/in/razan-armouti-1595b3149/" style={{color:"white", marginLeft:"5px"}}><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png" style={{width:"20px", height:"20px"}}/>Linkedin</a>
                                    </Col>
                                    <Col >
                                        <img src="https://ca.slack-edge.com/TNGRRLUMA-U026373R5F0-5f4783c246f5-512" alt="" style={{ width: "300px", height: "300px" }} />
                                        <h4 >Sara Kafaween</h4>
                                        <h6> Full Stack Developer</h6>
                                        <a href="https://github.com/SaraKafaween" style={{color:"white"}}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width:"20px", height:"20px"}}/>GitHub</a>
                                        <a href="https://www.linkedin.com/in/sara-kafaween-72bb87138/" style={{color:"white", marginLeft:"5px"}}><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png" style={{width:"20px", height:"20px"}}/>Linkedin</a>
                                    </Col>
                                    <Col >
                                        <img src="https://ca.slack-edge.com/TNGRRLUMA-U025V7US4QP-d80f5ba0b871-512" alt="" style={{ width: "300px", height: "300px" }} />
                                        <h4 >Eslam Akram</h4>
                                        <h6> Full Stack Developer</h6>
                                        <a href="https://github.com/eslamakram" style={{color:"white"}}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width:"20px", height:"20px"}}/>GitHub</a>
                                        <a href="http://www.linkedin.com/in/eslam-akram" style={{color:"white", marginLeft:"5px"}}><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png" style={{width:"20px", height:"20px"}}/>Linkedin</a>
                                    </Col>
                               
                                    <Col >
                                        <img src="https://ca.slack-edge.com/TNGRRLUMA-U025K4B1Z7A-9d6d6769cf99-512" alt="" style={{ width: "300px", height: "300px" }} />
                                        <h4 >Mohammd AlKhatib</h4>
                                        <h6> Full Stack Developer</h6>
                                        <a href="https://github.com/MohammadAl-khatib" style={{color:"white"}}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width:"20px", height:"20px"}}/>GitHub</a>
                                        <a href="http://www.linkedin.com/in/mohammad-alkhatib-3756ab85/" style={{color:"white", marginLeft:"5px"}}><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png" style={{width:"20px", height:"20px"}}/>Linkedin</a>
                                    </Col>

                                    <Col >
                                        <img src="https://ca.slack-edge.com/TNGRRLUMA-U0263742TGW-126d7efd85cc-512" alt="" style={{ width: "300px", height: "300px" }} />
                                        <h4 >Mu'men Al-Madaineh</h4>
                                        <h6> Full Stack Developer</h6>
                                        <a href="https://github.com/mumenAlmadaineh" style={{color:"white"}}><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" style={{width:"20px", height:"20px"}}/>GitHub</a>
                                        <a href="https://www.linkedin.com/in/mumenalmadaineh" style={{color:"white", marginLeft:"5px"}}><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG16.png" style={{width:"20px", height:"20px"}}/>Linkedin</a>
                                    </Col>
                                    </Row>
                            </CardBody>
                        </Card>
                    

                </Col>
            </Row>
            </div>
        </>
    );
}



export default AboutUs



