import { Grid ,Box } from '@mui/material'
import React from 'react'

const Task1 = () => {
  return (
    <Grid container >
       <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:"120px",backgroundColor:"blue"}}></Box></Grid>
       <Grid container>
          <Grid item xs={12} sm={6} md={3} lg={3}><Box sx={{height:"300px",backgroundColor:"violet"}}></Box></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className='White'><Box sx={{height:"300px",backgroundColor:"white"}}></Box></Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}><Box sx={{height:"300px",backgroundColor:"yellow"}}></Box></Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className='Brown'><Box sx={{height:"180px",backgroundColor:"Brown"}}></Box></Grid>
       <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:"120px",backgroundColor:"blue"}}></Box></Grid>
    </Grid>
  )
}

export default Task1
