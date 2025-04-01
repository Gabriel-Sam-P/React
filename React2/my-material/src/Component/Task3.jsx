import { Grid,Box, Typography } from '@mui/material'
import React from 'react'

 const Task3 = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:"100px",backgroundColor:"green"}}><Typography variant='h4' sx={{textAlign:"center"}}>Header</Typography></Box></Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:"100px",backgroundColor:"#7CFC00"}}><Typography variant='h4' sx={{textAlign:"center"}}>Content</Typography></Box></Grid>




      <Grid item xs={12} sm={12} md={4} lg={4} >
        <Box  className="Three" sx={{height:"250px",backgroundColor:"#00CED1",justifyItems:"center",paddingTop:"10px"}}>
          <Grid  className='T3' sx={{height:"110px",width:"50%",backgroundColor:"yellow"}}></Grid>


          <Grid sx={{height:"100px",width:"50%"}}>
              <Box sx={{height:"20px",width:"70%",backgroundColor:"blue",marginTop:2}}></Box> 
              <Box sx={{height:"20px",width:"80%",backgroundColor:"blue",marginTop:1}}></Box>
              <Box sx={{height:"20px",width:"60%",backgroundColor:"blue",marginTop:1}}></Box>
          </Grid>
        </Box>
      </Grid>

      
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box className="Three"sx={{height:"250px",backgroundColor:"	#6495ED",justifyItems:"center",paddingTop:"10px"}}>
          <Grid className="T3" sx={{height:"110px",width:"50%",backgroundColor:"yellow"}}></Grid>

          <Grid sx={{height:"100px",width:"50%"}}>
              <Box sx={{height:"20px",width:"70%",backgroundColor:"blue",marginTop:2}}></Box> 
              <Box sx={{height:"20px",width:"80%",backgroundColor:"blue",marginTop:1}}></Box>
              <Box sx={{height:"20px",width:"60%",backgroundColor:"blue",marginTop:1}}></Box>
          </Grid>          
        </Box>
      </Grid>


      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Box className="Three" sx={{height:"250px",backgroundColor:"#00CED1",justifyItems:"center",paddingTop:"10px"}}>
         <Grid className="T3" sx={{height:"110px",width:"50%",backgroundColor:"yellow"}}></Grid>

          <Grid sx={{height:"100px",width:"50%"}}>
              <Box sx={{height:"20px",width:"70%",backgroundColor:"blue",marginTop:2}}></Box> 
              <Box sx={{height:"20px",width:"80%",backgroundColor:"blue",marginTop:1}}></Box>
              <Box sx={{height:"20px",width:"60%",backgroundColor:"blue",marginTop:1}}></Box>
          </Grid>       
        </Box>
      </Grid>






      <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:"100px",backgroundColor:"green"}}><Typography variant='h4'sx={{textAlign:"center"}}>Footer</Typography></Box></Grid>
    </Grid>
  )
}

export default Task3
