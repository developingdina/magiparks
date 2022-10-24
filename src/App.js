import React, { useEffect, useState } from 'react';
import ParkCard from './components/ParkCard'
import { Grid } from '@mui/material';


export default function App() {

    const [parkInfo, setParkInfo] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/parks")
      .then((resp => resp.json()))
      .then((data) => setParkInfo(data))
    },[])



  return (
    <div className="App">
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <ParkCard />
      <ParkCard />
      <ParkCard />
      <ParkCard />
      <ParkCard />
      <ParkCard />


      </Grid>
    </div>
  );

 
}
