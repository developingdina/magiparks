import React from 'react'
import Button from './Button'
import {useState} from 'react'

export default function ListItem({input, title, desc, id, refFunction}) {

const [buttonCount, setButtonCount] = useState(0)

 function deletePark(id){
    fetch(`http://localhost:3000/parks/${id}`, {
        method: "DELETE"
    }).then(refFunction())
 }
 
 function counter(){
  setButtonCount(input)
 }
    return (
        <div style={{border: "2px solid palevioletred", margin: "0 1em", padding: "0.25em 1em"}} >
            <h3 >{title}</h3>
            <p>{desc}</p>
            <Button onClick={() => deletePark(id)}>Remove</Button>
            <button onClick={counter}>{buttonCount}</button>
        </div>
    )
}

//Add to blog how onClick was made.
//binds specific park to that instance of a button at that time...
//Also not constantly calling the function with ()
//onClick={() => deletePark()} vs onClick={deletePark} vs onClick={deletePark()}

//
//function deletePark(id){
////fetch(`http://localhost:3000/parks/${id}`,/{
///     method: "DELETE"
 //   }).then((resp) => resp.json())
 //   .then((data) =>{
 //       alert(`Park ${data} has been deleted`)
//    })
// }

//the above will delete the items, but you will need
//to refresh to show the result
//-----------------------------------
// Each list item has counter
//counter default 0
//Input field at top park list def=1
//input tied to specific component counter