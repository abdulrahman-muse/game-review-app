import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";



function NavBar({ setUser, user }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} exact to={"/"}>No 🧢 Reviews</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} exact to={"/"}>Home</Nav.Link>
                        <Nav.Link as={NavLink} exact to={"/games"}>Games</Nav.Link>
                        <Nav.Link as={NavLink} exact to={"/review-form"}>New Review</Nav.Link>
                        <NavDropdown title={`Welcome ${user.username}`} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleLogoutClick}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
