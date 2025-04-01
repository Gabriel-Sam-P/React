import { Grid ,Box} from '@mui/material'
import React from 'react'

const Task5 = () => {
  return (
    <Grid container>
        <Grid item xs={12} sm={3} md={3} lg={3}><Box sx={{height:{lg:"100px",md:"90px",sm:"80px",xs:"70px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"yellow"}}></Box></Grid>
        <Grid item xs={12} sm={9} md={9} lg={9}><Box sx={{height:{lg:"100px",md:"90px",sm:"80px",xs:"70px"},width:{lg:"95%",md:"95%",sm:"91%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"orange"}}></Box></Grid>





        <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:{lg:"100px",md:"90px",sm:"70px",xs:"50px"},width:{lg:"96%",md:"96%",sm:"93%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"#8B008B"}}></Box></Grid>







        <Grid item xs={12} sm={12} md={12} lg={12}><Box sx={{height:{lg:"300px",md:"300px",sm:"250px",xs:"250px"},width:{lg:"96%",md:"96%",sm:"93%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"#48D1CC"}}></Box></Grid>






        <Grid item xs={12} sm={4} md={4} lg={4}>
            <Box sx={{height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"gray"}}></Box>
            <Box sx={{height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"gray"}}></Box>
            <Box sx={{height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"gray"}}></Box>
            <Box sx={{height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"gray"}}></Box>
            <Box sx={{height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"gray"}}></Box>
            <Box sx={{height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"gray"}}></Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}><Box sx={{height:{lg:"300px",md:"300px",sm:"250px",xs:"250px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"#48D1CC"}}></Box></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}><Box sx={{height:{lg:"300px",md:"300px",sm:"250px",xs:"250px"},width:{lg:"90%",md:"90%",sm:"82%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"#48D1CC"}}></Box></Grid>






        <Grid item xs={12} sm={12} md={12} lg={12} display={{lg:"none",md:"block",sm:"none",xs:"none"}}><Box sx={{height:{lg:"200px",md:"200px",sm:"160px",xs:"140px"},width:{lg:"96.5%",md:"96.5%",sm:"94%",xs:"88%"},margin:{lg:"10px",md:"10px",sm:"10px",xs:"10px"},backgroundColor:"#48D1CC"}}></Box></Grid>
    </Grid>
  )
}

export default Task5
