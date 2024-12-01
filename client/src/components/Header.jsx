import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router'
export default function Header() {
  return (
    <Navbar bg='primary' expand='lg' variant='dark' className='shadow-sm py-3'>
      <Container>
        <Navbar.Brand as={Link} to='/' className='d-flex d-lg-none'>
          <h1 className='m-0 display-4 text-secondary'>
            <span className='text-white'>Roler</span>Fresh
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarCollapse' />
        <Navbar.Collapse id='navbarCollapse'>
          <Nav className='mx-auto'>
            <Nav.Link as={NavLink} to='/' className='active'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to='/service'>
              Service
            </Nav.Link>
            <Nav.Link as={NavLink} to='/product'>
              Product
            </Nav.Link>
            <NavDropdown title='Pages' id='pages-dropdown'>
              <NavDropdown.Item as={NavLink} to='/blog'>
                Grid
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/feature'>
                Features
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/team'>
                The Team
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
