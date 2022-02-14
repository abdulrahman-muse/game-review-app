import React from "react";
import {
    NavLink
} from "react-router-dom";



function NavBar() {

    return (
    <div>
        <NavLink  role="button" exact to="/">Home</NavLink>
        <NavLink  role="button" exact to="/games">All Games</NavLink>
        <NavLink  role="button" exact to="/review-form">Add Review</NavLink>
    </div>
    )
}

export default NavBar