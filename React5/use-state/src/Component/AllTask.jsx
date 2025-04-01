import React from 'react'


import  {Box,Button}  from '@mui/material'

import { Link } from 'react-router-dom'


const AllTask = () => {
  return (
    <div>
    <Box sx={{height:"100px",width:"100%",backgroundColor:"black"}}>
       <Button variant='text' sx={{backgroundColor:"violet"}}><Link to="/Task1" style={{textDecoration:"none"}}>Task1</Link></Button>
       <Button variant='text' sx={{backgroundColor:"violet"}}><Link to="/Task2" style={{textDecoration:"none"}}>Task2</Link></Button>
    </Box>
    </div>
  )
}

export default AllTask
