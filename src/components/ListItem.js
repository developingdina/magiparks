import React from 'react'

export default function ListItem(props) {


    function handleClick(){
        console.log("Clicked")
    }

    return (
        <>
          <h3 key={props.name} onClick={handleClick}style={{border: "2px solid black"}}>{props.name}</h3>
        </>
    )
}
