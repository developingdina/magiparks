import React from 'react'
import ListItem from './ListItem'

export default function ParkList(props) {


    const p = props.list.map((park) => (<ListItem name={park}/>))
    return (
        <div>
            <h1>Park List</h1>
            <ul>
               {p}
            </ul>
        </div>
    )
}
