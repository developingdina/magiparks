import React from "react";
import { useState } from "react";

export default function SuggestPark(){
//function to handle form changes
//function to handle state changes
//add state


    return(
        <div>
            <form>
                <label>
                    Park Title:<br/>
                    <input type="text" name="title"/>
                </label><br/>
            
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
//format div so there is more space between the Navbar and the Form itself