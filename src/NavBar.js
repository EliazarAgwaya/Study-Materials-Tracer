import React from "react"
import {NavLink} from "react-router-dom"

function NavBar (){
    return(
        <div className="navbar">
            <NavLink to="/">
                <button className="button">Home</button>
            </NavLink>

            <NavLink to="/materials">
                <button className="button">Materials</button>
            </NavLink>

            <NavLink to="/form">
                <button className="button">Add new material</button>
            </NavLink>
            
        </div>
    )
}

export default NavBar