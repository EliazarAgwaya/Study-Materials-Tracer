import React from "react"
import {NavLink} from "react-router-dom"

function NavBar (){
    return(
        <div>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>

            <NavLink to="/materials">
                <button>Materials</button>
            </NavLink>

            <NavLink to="/form">
                <button>Add new material</button>
            </NavLink>
            
        </div>
    )
}

export default NavBar