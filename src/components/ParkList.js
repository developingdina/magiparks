import React from 'react'
import { useState, useEffect } from 'react'
import ListItem from './ListItem'
import NewPark from './NewPark'
import Button from './Button'

export default function ParkList(props) {

const [card, setCard] = useState([])
const [parkView, setParkView] = useState(false)

useEffect(()=> {
    getParks()
  }, [])
  

  function getParks(){
    fetch("http://localhost:3000/parks")
    .then((resp) => resp.json())
    .then((data) => {
        setCard(data)
        console.log(card)
    })
  }

  function hideParkForm(){
        setParkView(!parkView)
  }

    return (
        <div>
            <h1>Other National Parks</h1>
            {parkView === true && <NewPark refresh={() => getParks()}/>}
            <Button onClick={hideParkForm}>Add</Button>
            <ul>
                {card.map((obj) => (
                    <ListItem key={obj.title} title={obj.title} desc={obj.desc} id={obj.id} refFunction={() => getParks()}/>
                ))}
            </ul>
        </div>
    )
}
