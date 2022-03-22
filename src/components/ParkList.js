import React from 'react'
import { useState, useEffect } from 'react'
import ListItem from './ListItem'
import NewPark from './NewPark'
import Button from './Button'


export default function ParkList(props) {

const [card, setCard] = useState([])
const [parkView, setParkView] = useState(false)
const [input, setInput] = useState(0)

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

  function inputVal(e){
      setInput(e.target.value)
      console.log(input)
  }


    return (


        <div className="container">


            <h1>"Other" National Parks</h1>
            {parkView === true && <NewPark refresh={() => getParks()}/>}
            <Button onClick={hideParkForm}>Add</Button>
            <form id="counter-form">
                <input onChange={inputVal} value={input} type="text" />
            </form>
            <ul className="ul">
                {card.map((obj) => (
                    <ListItem key={obj.title} input={input} title={obj.title} desc={obj.desc} id={obj.id} refFunction={() => getParks()}/>
                ))}
            </ul>
        </div>
    )
}

//props are read only