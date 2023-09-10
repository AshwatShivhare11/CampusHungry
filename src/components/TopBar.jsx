import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {MdLocalOffer} from 'react-icons/md';


const TopBar = () => {
  return (
    <div>
        <Navbar bg = "light" varient="light" expand="lg">
            <Container fluid>
                 <h6>
                    <MdLocalOffer className="text-warning"/>
                    Buy 1 get 1 free week Live!!!!
                </h6>
                 <Nav className='ms-auto'>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/policy">
                        <Nav.Link>Policy</Nav.Link>
                    </LinkContainer>
                    

                 </Nav>

            </Container>
        
        
        </Navbar>
    </div>
  )
}

export default TopBar
