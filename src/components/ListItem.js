import React from 'react'
import Button from './Button'
export default function ListItem({title, desc, id}) {



 function deletePark(id){
    console.log(id)
 }
    return (
        <div style={{border: "2px solid palevioletred", margin: "0 1em", padding: "0.25em 1em"}} >
            <h3 >{title}</h3>
            <p>{desc}</p>
            <Button onClick={() => deletePark(id)}>Remove</Button>
        </div>
    )
}

//Add to blog how onClick was made.
//binds specific park to that instance of a button at that time...
//Also not constantly calling the function with ()
//onClick={() => deletePark()} vs onClick={deletePark} vs onClick={deletePark()}