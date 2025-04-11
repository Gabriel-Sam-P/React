import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
  return (
    <Box>
        <Typography variant='h3' sx={{textAlign:"center",fontWeight:"bold"}}>
            Welcome to Great Kirigalan Magic Show
        </Typography>
        <Box sx={{display:"flex",justifyContent:"center",margin:"20px"}}>
            <Button variant='contained' onClick={()=>navigate('/')}>Logout</Button>
        </Box>
    </Box>
  )
}

export default Home;