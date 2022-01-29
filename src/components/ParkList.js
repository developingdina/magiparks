import React from 'react'
import { useState, useEffect } from 'react'
import ListItem from './ListItem'

export default function ParkList(props) {

const [card, setCard] = useState([])

useEffect(()=> {
    fetch("http://localhost:3000/parks")
    .then((resp) => resp.json())
    .then((data) => {
        setCard(data)
        console.log(card)
    })
  }, [])
  
const p = card.map((park) => {
    <ListItem key={park.title} title={park.title}/>
})

    return (
        <div>
            <h1>Park List</h1>
            <ul>
                {p}
            </ul>
        </div>
    )
}
