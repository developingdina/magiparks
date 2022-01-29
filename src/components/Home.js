import React from 'react'
import { useState, useEffect } from 'react'
import ParkList from './ParkList';
import Button from './Button';

export default function Home() {
    
    return (
        <div id="home">
            <h1>The Other National Parks System</h1>
        <p>Hello there! Welcome to Magiparks, this is the (growing) national 
            parks information center for all our favorite sci-fi/fantasy 
            places. Our brave Park Rangers are constantly update our mapped areas so visit often and remember
            to stay within the designated areas outlined in our guides.</p>
            <strong style={{color: "pink"}}>Magiparks Corp. and all affiliated companies are not 
                responsible for bodily harm or accidental death, dismemberment
                or turning to the darkside that may occur outside of our protected
                zones
            </strong>
        </div>
    )
}
