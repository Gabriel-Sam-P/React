import React from 'react'

import  {Box}  from '@mui/material'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box sx={{height:"100px",width:"50%",backgroundColor:"#87CEEB"}}>
      <Link to="./One">One</Link>
      <Link to="./Two">Two</Link>
      <Link to="./Three">Three</Link>
      <Link to="./Four">home</Link>
    </Box>
  )
}

export default Header
