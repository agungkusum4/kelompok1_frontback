import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/">GREENTECH-IRIGASMART</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/datamonitoring" className={styles.navLink}>
              Data
            </Nav.Link>
            <Nav.Link as={NavLink} to="/deskripsialat" className={styles.navLink}>
              Deskripsi
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/login" className={styles.navLink}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
