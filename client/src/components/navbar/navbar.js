import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";

function NavigationBar(props) {
    return (
        <Navbar className="color-nav fixed-top" variant="dark" expand="lg">
            <Navbar.Brand href="#home">
                <FontAwesomeIcon className="icon" icon={faDiceD20} />
                TaxChain
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto ml-auto">
                    <Nav.Link className="nav-link" href="/citizen">
                        Citizens
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/government">
                        Government
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/constituency">
                        Constituency
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/contractor">
                        Contractor
                    </Nav.Link>
                </Nav>
                <Nav.Link className="nav-link" href="/login">
                    <Button variant="outline" className="btn-green">
                        Login
                    </Button>
                </Nav.Link>
                <Nav.Link className="nav-link navbar-signup" href="/signup">
                    SignUp
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
