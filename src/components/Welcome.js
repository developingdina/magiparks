import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

export default function Welcome(){

    return(
        <div id="welcome">
            <h1>Welcome Traveler</h1>
             
      <NavLink to="/parks">
        <Button>Enter</Button>
      </NavLink>

        </div>
    )
}