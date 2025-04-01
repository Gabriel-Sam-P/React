import React from 'react'
import { Typography } from '@mui/material'
import{ Grid }from '@mui/material' 
import {Box} from '@mui/material'


const Desk = () => {
  return (
    <Grid container >
      <Grid item xs={12} sm={4} md={3} lg={2}><Box sx={{height:"100px",textAlign:"center",color:"white",backgroundColor:"red"}}><Typography variant='h1'sx={{height:"100px"}}>1</Typography></Box></Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} sx={{height:"100px",backgroundColor:"blue"}}><Box sx={{textAlign:"center",color:"white"}}><Typography variant='h1'sx={{height:"100px"}}>2</Typography></Box></Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} sx={{height:"100px",backgroundColor:"green"}}><Box sx={{textAlign:"center",color:"white"}}><Typography variant='h1'sx={{height:"100px"}}>3</Typography></Box></Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} sx={{height:"100px",backgroundColor:"yellow"}}><Box sx={{textAlign:"center",color:"white"}}><Typography variant='h1'sx={{height:"100px"}}>4</Typography></Box></Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} sx={{height:"100px",backgroundColor:"gray"}}><Box sx={{textAlign:"center",color:"white"}}><Typography variant='h1'sx={{height:"100px"}}>5</Typography></Box></Grid>
    </Grid>
  )
}

export default Desk
