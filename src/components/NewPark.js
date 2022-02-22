import React from "react";
import { useState } from "react";

export default function NewPark(){
//function to handle form changes
//function to handle state changes
//add state
const [title, setTitle] = useState(" ")

function handleChange(e){
    setTitle(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/parks", {
        method: "POST",
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title
        })
    }).then((resp) => resp.json())
    .then(data => console.log(data))
    //add a fetch POST call to send the value to the 
    //db

}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Park Title:<br/>
                    <input onChange={handleChange} value={title} type="text"/>
                </label><br/>
            
                <input type="submit" />
            </form>
        </div>
    )
}
//format div so there is more space between the Navbar and the Form itself