import React from "react"
import {NavLink} from "react-router-dom"

function NavBar (){
    return(
        <div className="navbar">
          <div className="links">
            <NavLink to="/">
                <button className="button">Home</button>
            </NavLink>

            <NavLink to="/materials">
                <button className="button">Materials</button>
            </NavLink>

            <NavLink to="/form">
                <button className="button">Add new material</button>
            </NavLink>

            <NavLink to="/login">
                <button className="button">Login</button>
            </NavLink>
           </div>           
        </div>
    )
}

export default NavBar