import React from "react";
import { useState } from "react";

export default function NewPark(props){
//function to handle form changes
//function to handle state changes
//add state
const [title, setTitle] = useState(" ")
const [desc, setDesc] = useState(" ")


function handleTitle(e){
    setTitle(e.target.value)
}

function handleDesc(e){
    setDesc(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3000/parks", {
        method: "POST",
        headers:  { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            desc: desc
        })
    }).then(props.refresh)
   .then(setTitle(""), setDesc(""))

    //add a fetch POST call to send the value to the 
    //db

}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Park Title:<br/>
                    <input onChange={handleTitle} value={title} type="text" /><br/>
                    Description:<br/>
                    <input onChange={handleDesc} value={desc} type="text"/>

                </label><br/>
            
                <input type="submit" />
            </form>
        </div>
    )
}
//format div so there is more space between the Navbar and the Form itself