import { Box, Button } from '@mui/material'
import React, { useCallback, useState } from 'react'

export const Callback = () => {
    const [count,setCount] = useState(0)
    const increment = useCallback(()=>{
        setCount(a => a+1)
    },[])
    const decrement = useCallback(()=>{
        setCount(c => c-1)
    },[])
  return (
    <Box>
        <Button variant='contained' onClick={decrement}>-</Button>
        <h1>{count}</h1>
        <Button variant='contained' onClick={increment}>+</Button>
    </Box>
  )
}

export default Callback;