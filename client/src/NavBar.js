import React, { useReducer } from "react";
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
            <NavLink role="button" exact to="/">Home</NavLink>
            <NavLink role="button" exact to="/games">All Games</NavLink>
            <NavLink role="button" exact to="/review-form">Add Review</NavLink>
            <button onClick={handleLogoutClick} >
                Logout
            </button>
        </div>
    )
}

export default NavBar

