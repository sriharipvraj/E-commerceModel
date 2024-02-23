import React from "react";
import "../Styling/Enav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/logo1.jpg"
import logo2 from "../Images/logo2.jpg"
import logo3 from "../Images/logo3.jpg"
import aicon from "../Images/account.png"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Enav=(isLoggedIn)=> {
  return (
    <div className="enav">
      {isLoggedIn?( <Navbar bg="light" data-bs-theme="dark" collapseOnSelect expand="lg"  className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo3}
              width="90"
              height="50"
              className="d-inline-block align-top"
              alt="Muscle Formula"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="brandname"><i>BULLMASS NUTRITION</i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><Link to="/home" className="home"> HOME</Link> </Nav.Link>
              <Nav.Link href="#features"><Link to="/products" className="home"> PRODUCTS</Link> </Nav.Link>
             
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">
              <Button variant="info">Login</Button>
              </Nav.Link> */}
              <Nav.Link href="#deets">
             <Link to="/signup"><img src={aicon} className="aicon"></img> </Link>
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>):( <Navbar bg="light" data-bs-theme="dark" collapseOnSelect expand="lg"  className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo3}
              width="90"
              height="50"
              className="d-inline-block align-top"
              alt="Muscle Formula"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="brandname"><i>BULLMASS NUTRITION</i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><Link to="/home" className="home"> HOME</Link> </Nav.Link>
              <Nav.Link href="#features">STORES </Nav.Link>
              <Nav.Link href="#features">OFFERS </Nav.Link>
              <Nav.Link href="#pricing">CONTACT</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">
              <Button variant="info">Login</Button>
              </Nav.Link> */}
              <Nav.Link href="#deets">
             <Link to="/signup"><img src={aicon} className="aicon"></img> </Link>
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)}
     
    </div>
  );
}

export default Enav;
