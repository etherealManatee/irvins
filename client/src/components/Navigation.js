import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Irvins</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;