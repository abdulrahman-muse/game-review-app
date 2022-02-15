import React from "react";
import { NavLink } from "react-router-dom";



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
            <h3>Welcome {user.username}</h3>
            <NavLink style={{margin: 50}} role="button" exact to="/">Home</NavLink>
            <NavLink style={{margin: 50}}role="button" exact to="/games">All Games</NavLink>
            <NavLink style={{margin: 50}}role="button" exact to="/review-form">Add Review</NavLink>
            <button style={{margin: 50}} onClick={handleLogoutClick} >
                Logout
            </button>
        </div>
    )
}

export default NavBar

