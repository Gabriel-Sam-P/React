import React from 'react'
import { Grid ,Typography,Box } from '@mui/material'

const Desk2 = () => {
  return (
    <Grid container >
      
        {["blue","green","red","gray","brown"].map((color,index)=>(
             <Grid item key={index} xs={12} sm={4} md={3} lg={2} sx={{height:"100px",backgroundColor:color}}>
                <Box sx={{textAlign:"center",color:"white"}}>
                    <Typography variant='h1'sx={{height:"100px"}}>{index+1}</Typography>
                </Box>
                
             </Grid>
        ))}
    </Grid>
  )
}

export default Desk2
