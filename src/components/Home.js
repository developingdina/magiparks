import React from 'react'
import { useState, useEffect } from 'react'
import ParkList from './ParkList';
import Button from './Button';

export default function Home() {


    const parkArray = [
        "The Forgotten Woods",
        "Amity Island National Park",
        "Dagobah National Park",
        "Tatooine National Park",
        "Mordor Historical Monument"
    ]

    const [list, setList] = useState([]);


    function handleClick(){
      setList(...parkArray, )
      console.log(list)
    }

    return (
        <div>
            <h1>Welcome Traveler</h1>
           
            <button onClick={handleClick}>Click for Destination</button>

        </div>
    )
}
