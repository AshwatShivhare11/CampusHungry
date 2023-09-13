import React from 'react'
import { Navbar, Container, Nav, Image } from 'react-bootstrap'
import { LinkContainer, } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineLogin} from 'react-icons/ai'
const NavBar = () => {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <Image
                src='images/campusHungry.png'
                alt='logo'
                style={{width: "20%" , height: "40%"}}

            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
            <Nav.Link >Login<AiOutlineLogin /></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link >Cart<AiOutlineShoppingCart /></Nav.Link>
            </LinkContainer>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
