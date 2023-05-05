import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const PageNavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand className='brand' to={'/'} as={Link}>Home</Navbar.Brand>
      <Navbar.Toggle className='narrow-menu' />
      <Navbar.Collapse className='justify-content-end narrow-style'>
        <Nav className='navbar-container'>
          <Link className='navbar-link' to='/'>About Me</Link>
          <Link className='navbar-link' to='/projects'>View Projects</Link>
          <Link className='navbar-link' to='https://www.linkedin.com/in/hannah-bodey/' target='_blank' rel='noreferrer'>Contact Me</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default PageNavBar