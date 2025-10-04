import { Form ,Container ,Navbar , Nav ,NavDropdown   } from "react-bootstrap";
import React from 'react'
import "./menu.css"
import logo from "../../assets/Mary.png"
import { FaCloudDownloadAlt } from "react-icons/fa";
const Menu = () => {
  return (
     <Navbar expand="lg" className="navitem">
      <Container id="one">
        <Navbar.Brand href="#home"> 
        <img src={logo} alt="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Community</a>
            <a href="#">About</a>
            <a href="#">Help</a>
          </Nav>
           <div className="download">
          <a href="#"><FaCloudDownloadAlt className="icon" /> Download</a>
        </div>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  )
}

export default Menu