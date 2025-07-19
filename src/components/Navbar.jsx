import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarComponent(){
        return (
                <Row className='' style={{backgroundColor:"#232f3e"}}>
                        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                                <Container>
                                <Navbar.Brand href="/">Offer a Smile</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                                        <Nav className="me-auto">
                                        <Nav.Link href="/" style={{paddingRight:"30px"}}>Home</Nav.Link>
                                        <Nav.Link href="/gallery" style={{paddingRight:"30px"}}>Events & Gallery</Nav.Link>
                                        <Nav.Link href="/joinus" style={{paddingRight:"30px"}}>Join Us</Nav.Link>
                                        <Nav.Link href="/contactus" style={{paddingRight:"30px"}}>Contact Us</Nav.Link>
                                        <Nav.Link href="/donate" style={{paddingRight:"30px"}}>Donate</Nav.Link>
                                        <NavDropdown title="About Us" id="basic-nav-dropdown" style={{paddingRight:"30px"}}>
                                        <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                                        <NavDropdown.Item href="/about#overview">Overview</NavDropdown.Item>
                                        <NavDropdown.Item href="/about#vision">Vision & Mission</NavDropdown.Item>
                                        <NavDropdown.Item href="/about#ourwork">Our work</NavDropdown.Item>
                                        </NavDropdown>
                                        </Nav>
                                        </Navbar.Collapse>
                                </Container>
                        </Navbar>
                </Row>
        )
}

export default NavbarComponent;