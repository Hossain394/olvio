import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <Container>

        <Row className="justify-content-center">
            <Col lg={3}>
            <div className="about_text" >
                <h3>About Me</h3>
            </div>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col lg={10}>
            <div className="about_text">
                <p>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={3}>
                <div className="item_one">
                    <h5>Name</h5>
                    <h3>Mary Hardy </h3>
                </div>
            </Col>
            <Col lg={3}>
                <div className="item_one">
                    <h5>Name</h5>
                    <h3>Mary Hardy </h3>
                </div>
            </Col>
            <Col lg={3}>
                <div className="item_one">
                    <h5>Name</h5>
                    <h3>Mary Hardy </h3>
                </div>
            </Col>
            <Col lg={3}>
                <div className="item_one">
                    <h5>Name</h5>
                    <h3>Mary Hardy </h3>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About