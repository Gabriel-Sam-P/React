import { Grid ,Box } from '@mui/material'
import React from 'react'

const Task2 = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6}><Box sx={{height:"90px",backgroundColor:"orange"}}></Box></Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}><Box sx={{height:"90px",backgroundColor:"violet"}}></Box></Grid>

    

      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:"300px",backgroundColor:"yellow"}}></Box></Grid>
      </Grid>



      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}><Box sx={{height:"200px",backgroundColor:"blue"}}></Box></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}><Box sx={{height:"200px",backgroundColor:"green"}}></Box></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}><Box sx={{height:"200px",backgroundColor:"blue"}}></Box></Grid>
      </Grid>



      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={3}><Box sx={{height:"160px",backgroundColor:"red"}}></Box></Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} className='Two'><Box sx={{height:"160px",backgroundColor:"gray"}}></Box></Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} className='Two'><Box sx={{height:"160px",backgroundColor:"pink"}}></Box></Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} className='Two'><Box sx={{height:"160px",backgroundColor:"yellow"}}></Box></Grid>
      </Grid>


    </Grid>
  )
}

export default Task2
