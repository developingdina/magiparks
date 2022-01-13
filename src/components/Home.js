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

    return (
        <div>
            <h1>Welcome Traveler</h1>
            <ParkList list={parkArray}/>

        </div>
    )
}
