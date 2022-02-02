import React from 'react'
export default function ListItem({title, desc}) {

    return (
        <div style={{border: "2px solid palevioletred", margin: "0 1em", padding: "0.25em 1em"}} >
            <h3 >{title}</h3>
            <h4>{desc}</h4>
            <text></text>
        </div>
    )
}
