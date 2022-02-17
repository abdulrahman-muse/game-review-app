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

// {/* <Navbar bg="dark" variant="dark">
// <Container>
// <Navbar.Brand href="#home">Navbar</Navbar.Brand>
// <Nav className="me-auto">
//   <Nav.Link href="#home">Home</Nav.Link>
//   <Nav.Link href="#features">Features</Nav.Link>
//   <Nav.Link href="#pricing">Pricing</Nav.Link>
// </Nav>
// </Container>
// </Navbar> */}

// {/* <h3>Welcome {user.username}</h3>
// <NavLink style={{margin: 50}} role="button" exact to="/">Home</NavLink>
// <NavLink style={{margin: 50}}role="button" exact to="/games">All Games</NavLink>
// <NavLink style={{margin: 50}}role="button" exact to="/review-form">Add Review</NavLink>
// <button style={{margin: 50}} onClick={handleLogoutClick} >
//     Logout
// </button> */}

// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>