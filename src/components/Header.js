import React from "react";
import logo from "../assets/skygoal.png"
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="shadow"style={{ backgroundColor: "#1a365d" ,borderRadius:10}}>
        <Container>
          <Navbar.Brand  style={{display:"flex",gap:70}}>
            <img src={logo} alt="logo"style={{width:70}}/>
            <h2 style={{ color: "white", textAlign: "center", marginTop:10}}>
              LEADS MANAGEMENT SYSTEM
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="me-s my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/users/signup" style={{ color: "white" }}>
                SIGNUP
              </Nav.Link>
              <Nav.Link href="/users/login-user" style={{ color: "white" }}>
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;