import { Grid,Box } from '@mui/material'
import React from 'react'

const Task4 = () => {
  return (
    <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box sx={{display:"flex",justifyContent:"end",height:{lg:"50px",md:"50px",sm:"40px",xs:"30px"},backgroundColor:"#87CEEB"}}>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"20px",xs:"15px"},width:{lg:"25px",md:"25px",sm:"20px",xs:"15px"},margin:{lg:"15px",md:"10px",sm:"8px",xs:"4px"},backgroundColor:"#76ABDF",borderRadius:"20px"}}></Box>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"20px",xs:"15px"},width:{lg:"25px",md:"25px",sm:"20px",xs:"15px"},margin:{lg:"15px",md:"10px",sm:"8px",xs:"4px"},backgroundColor:"#76ABDF",borderRadius:"20px"}}></Box>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"20px",xs:"15px"},width:{lg:"25px",md:"25px",sm:"20px",xs:"15px"},margin:{lg:"15px",md:"10px",sm:"8px",xs:"4px"},backgroundColor:"#76ABDF",borderRadius:"20px"}}></Box>
            </Box>
        </Grid>




        <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:{lg:"200px",md:"200px",sm:"160px",xs:"135px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"36px",md:"30px",sm:"34px",xs:"30px"},backgroundColor:"#6495ED"}}></Box></Grid>






        <Grid item xs={12} sm={6} md={3} lg={3}><Box sx={{height:{lg:"255px",md:"230px",sm:"225px",xs:"135px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"36px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"#FFA500"}}></Box></Grid>
        <Grid item xs={12} sm={6} md={9} lg={9}>
          <Box sx={{height:{lg:"60px",md:"60px",sm:"55px",xs:"50px"},width:{lg:"93%",md:"93%",sm:"83%",xs:"88%"},margin:{lg:"38px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"	#ADD8E6"}}></Box>
          <Box sx={{height:{lg:"60px",md:"60px",sm:"55px",xs:"50px"},width:{lg:"93%",md:"93%",sm:"83%",xs:"88%"},margin:{lg:"38px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"	#ADD8E6"}}></Box>
          <Box sx={{height:{lg:"60px",md:"60px",sm:"55px",xs:"50px"},width:{lg:"93%",md:"93%",sm:"83%",xs:"88%"},margin:{lg:"38px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"	#ADD8E6"}}></Box>
        </Grid>





        <Grid item xs={12} sm={12} md={12} lg={12} display={{lg:"none",md:"none",sm:"block",xs:"none"}}>
          <Box sx={{height:{lg:"60px",md:"60px",sm:"55px",xs:"50px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"38px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"	#ADD8E6"}}></Box>
          <Box sx={{height:{lg:"60px",md:"60px",sm:"55px",xs:"50px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"38px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"	#ADD8E6"}}></Box>
          <Box sx={{height:{lg:"60px",md:"60px",sm:"55px",xs:"50px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"38px",md:"25px",sm:"30px",xs:"30px"},backgroundColor:"	#ADD8E6"}}></Box>
        </Grid>
    </Grid>
  )
}

export default Task4