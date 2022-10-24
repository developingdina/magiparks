import React from 'react';
import {Card, CardContent, Typography} from '@mui/material'

function ParkCard(){
    return(
        <div>
            <Card sx={{minWidth: 275}}>
          <CardContent>
            <Typography variant="h1">
              I'm the Title
            </Typography>
            <Typography variant="body2">
            I'm a short description
            </Typography>
          </CardContent>
        </Card>
        </div>
    )
}

export default ParkCard