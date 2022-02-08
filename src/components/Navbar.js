import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Navbar(){


    return(
        <div>
            <NavLink to="/parks">
                <Button>Parks</Button>
            </NavLink>

            <NavLink to="/home">
                <Button>Home</Button>
            </NavLink>
            
            <NavLink to="/about">
                <Button>About</Button>
            </NavLink>
            
            <NavLink to="/">
                <Button>Exit</Button>
            </NavLink>
        </div>
    )
}