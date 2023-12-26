import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/favicon.ico'
import { Link } from "react-router-dom"

import "./Navbar.css";


function NavbarReact() {
  return (
    <div>
      <Navbar className='navibar' bg="bg-warning" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={logo} className='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown.Item href="/certificado">Certificado</NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown.Item href="/contato">Contato</NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarReact
