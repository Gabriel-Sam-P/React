import React from 'react'

import {Box} from '@mui/material'
 
import Img from '../Assests/Nature.jpg'

const PortFolio = () => {
  return (
    <Box sx={{textAlign:"center",marginTop:10}}>
       <img src={Img} alt="new" />
    </Box>
  )
}

export default PortFolio
