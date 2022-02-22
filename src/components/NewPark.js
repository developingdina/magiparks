import React from "react";
import { useState } from "react";

export default function NewPark(){
//function to handle form changes
//function to handle state changes
//add state
const [value, setValue] = useState(" ")

function handleChange(e){
    setValue(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/parks", {
        method: "POST",
        headers: {
            "Content-Type": 'applicaton/json'
        },
        body: JSON.stringify(value)
    })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    //add a fetch POST call to send the value to the 
    //db

}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Park Title:<br/>
                    <input onChange={handleChange} value={value} type="text" name="title"/>
                </label><br/>
            
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
//format div so there is more space between the Navbar and the Form itself