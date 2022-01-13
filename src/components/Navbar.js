import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){


    return(
        <div>
            <NavLink to="/parks">
                <button>Parks</button>
            </NavLink>

            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
        </div>
    )
}