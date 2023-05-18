import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Headernav() {
  return (
    <div>
        <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand >Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/signup" style={{color:"black"}}>Sign-Up</Link></Nav.Link>
            <Nav.Link ><Link to="/signin" style={{color:"black"}}>Sign-In</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headernav