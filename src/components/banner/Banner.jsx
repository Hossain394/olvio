import React from 'react'
import "./banner.css"
import { Container, Row ,Col} from 'react-bootstrap'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import photo from "../../assets/man.png"

const Banner = () => {
  return (
    <Container id='banner'>
      <Row>
      <Col lg={6}>
      <div className="banner_text">
        <h3>Hi, I  am</h3>
        <h1>Mary Hardy</h1>
        <p>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>
        <a href="#"><FaCloudDownloadAlt className='iconone'/>Download CV </a>
        <h5><FaPhoneVolume />Contact</h5>
      </div>
      </Col>
        <Col lg={6}>
           <div className="banner_img">
             <img src={photo} alt="" />
           </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner