import React from 'react'
import  {Box}  from '@mui/material'

import Button from '@mui/material/Button';


import { Link } from 'react-router-dom'
const Base = () => {
  return (
    <Box sx={{height:"100px",width:"100%",backgroundColor:"green"}}>
       <Button variant="text" sx={{borderRadius:"10px",backgroundColor:"black"}}><Link to="./Task1" style={{textDecoration:"none"}}>Task1</Link></Button>
       <Button variant="text" sx={{borderRadius:"10px",backgroundColor:"black"}}><Link to="./Task2" style={{textDecoration:"none"}}>Task2</Link></Button>
       <Button variant="text" sx={{borderRadius:"10px",backgroundColor:"black"}}><Link to="./Task3" style={{textDecoration:"none"}}>Task3</Link></Button>
       <Button variant="text" sx={{borderRadius:"10px",backgroundColor:"black"}}><Link to="./Task4" style={{textDecoration:"none"}}>Task4</Link></Button>
       <Button variant="text" sx={{borderRadius:"10px",backgroundColor:"black"}}><Link to="./Task5" style={{textDecoration:"none"}}>Task5</Link></Button>
       <Button variant="text" sx={{borderRadius:"25px",backgroundColor:"Orange"}}><Link to="./Task6" style={{textDecoration:"none"}}>Task6</Link></Button>
    </Box>
  )
}

export default Base
