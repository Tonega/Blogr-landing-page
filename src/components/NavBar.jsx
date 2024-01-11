import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiAlignRight } from "react-icons/fi";
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';


function NavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleToggle = () => setShow(!show);

  return (
    <>
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand className="navbar-brand" to="#home">Blogr</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvas" onClick={handleToggle}>
            {show ? <FontAwesomeIcon icon={faTimes} /> : <FiAlignRight />}
          </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links me-auto">
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
              Pricing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">
              Marketplace
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.4">Features</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.5">
              Integration
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.4">
                Careers
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
              Newsletter
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Linkedin</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='login' as={Link} to="#home">Login</Nav.Link>
            <Nav.Link className='signup' as={Link} to="#link">Sign up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose} className='offcanvas' backdrop={false}>
        <Offcanvas.Body>
        <Nav className="navoff me-auto">
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item class as={Link} to="#action/3.1">Overview</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
              Pricing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">
              Marketplace
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.4">Features</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.5">
              Integration
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.4">
                Careers
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Connect" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2">
              Newsletter
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3">Linkedin</NavDropdown.Item>
            </NavDropdown>
            <hr className='line' />
            <Nav.Link as={Link} to="#home">Login</Nav.Link>
            <Nav.Link className='signup' as={Link} to="#link">Sign Up</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export default NavBar;