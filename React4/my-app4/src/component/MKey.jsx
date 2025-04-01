import React from 'react'

import  {Box,Button,Typography,Grid}  from '@mui/material'

import { Link } from 'react-router-dom'

const MKey = () => {
  return (

    <Grid container sx={{backgroundColor:"black"}}>
        <Grid item><Typography variant='h2' sx={{color:"white",marginLeft:12}}>WebSite</Typography></Grid>
        <Grid item>
            <Box sx={{height:"100px",width:"100%",color:"white",marginLeft:70,marginTop:2}}>
                 <Button variant='text' ><Link to="./Home">Home</Link></Button>
                 <Button variant='text'><Link to="./About">About</Link></Button>
                 <Button variant='text'><Link to="./PortFolio">PortFolio</Link></Button>
                 <Button variant='text'><Link to="./Contact">Contact</Link></Button>
             </Box>
        </Grid>
    </Grid>
  )
}

export default MKey
